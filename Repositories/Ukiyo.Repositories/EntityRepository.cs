using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Ukiyo.HttpResponse;
using Ukiyo.Models.Components;
using Ukiyo.Repositories.Results;

namespace Ukiyo.Repositories
{
    public abstract class EntityRepository<TEntity> : IEntityRepository<TEntity> where TEntity : Entity
    {
        public int Limit { get; protected set; } = 50;

        protected readonly IMongoCollection<TEntity> _collection;

        public EntityRepository(IConfiguration config, string collection)
        {
            var client = new MongoClient(config.GetConnectionString("Database:DBConn"));
            var database = client.GetDatabase(config.GetConnectionString("Database:DBName"));
            _collection = database.GetCollection<TEntity>(collection);
        }

        public FilterDefinition<TEntity> BuildQuery(IDictionary<string, string> fieldEqValue = null, IDictionary<string, IEnumerable<string>> fieldEqValues = null,
            IDictionary<string, IEnumerable<string>> fieldAnyInValue = null, IEnumerable<string> ids = null)
        {
            var filters = new List<FilterDefinition<TEntity>>();
            var filterBuilder = Builders<TEntity>.Filter;

            if (fieldEqValue != null && fieldEqValue.Any())
            {
                filters.Add(fieldEqValue
                    .Select(f => filterBuilder.Eq(f.Key, f.Value))
                    .Aggregate((curr, acc) => curr | acc)
                );
            }

            if (fieldEqValues != null && fieldEqValues.Any())
            {
                filters.Add(fieldEqValues
                    .Select(f => f.Value
                        .Select(v => filterBuilder.Eq(f.Key, v))
                        .Aggregate((curr, acc) => curr | acc))
                    .Aggregate((curr, acc) => curr | acc)
                );
            }

            if (fieldAnyInValue != null && fieldAnyInValue.Any())
            {
                filters.Add(fieldAnyInValue
                    .Select(f => filterBuilder.AnyIn(f.Key, f.Value))
                    .Aggregate((acc, curr) => acc | curr)
                );
            }

            if (ids != null && ids.Any())
            {
                filters.Add(ids
                    .Select(id => filterBuilder.Eq("_id", id))
                    .Aggregate((acc, curr) => acc | curr)
                );
            }

            return filterBuilder.Or(filters) & filterBuilder.Eq(e => e.Archived, false);
        }

        public async Task<HttpResponse<IEnumerable<TEntity>>> Paginate(int page = 1, int count = 10, FilterDefinition<TEntity> filter = null, SortDefinition<TEntity> sort = null, ProjectionDefinition<TEntity> projection = null)
        {
            if (count > Limit) count = Limit;
            if (page < 1) page = 1;

            var response = new HttpResponse<IEnumerable<TEntity>>();
            var filterBuilder = Builders<TEntity>.Filter;
            var sortBuilder = Builders<TEntity>.Sort;

            try
            {
                var query = _collection.Find(filter & filterBuilder.Eq(e => e.Archived, false))
                                    .Limit(count).Skip((page - 1) * count)
                                    .Sort(sort ?? sortBuilder.Ascending(e => e.LastModified))
                                    .Project<TEntity>(projection ?? Builders<TEntity>.Projection.Exclude(e => e.Archived));

                var result = await query.ToListAsync();
                response.Data = result;

                if (result == null || result.Count < 1)
                {
                    if (filter != null)
                    {
                        response.Message = $"No {typeof(TEntity).Name} was found that matches the filter.";
                    }
                    else
                    {
                        response.Message = $"{typeof(TEntity).Name} collection is empty.";
                    }
                }
                return response;
            }
            catch (Exception ex)
            {
                response.SetInternalError(ex);
                return response;
            }
        }

        public async Task<HttpResponse<TEntity>> Get(string id)
        {
            var response = new HttpResponse<TEntity>();
            try
            {
                var query = _collection.Find(e => e.Id == id);
                var result = await query.FirstOrDefaultAsync();
                response.Data = result;

                if (result == null)
                {
                    response.Message = $"{typeof(TEntity).Name} ({id}) not found.";
                }

                return response;
            }
            catch (Exception ex)
            {
                response.SetInternalError(ex);
                return response;
            }
        }

        public async Task<HttpResponse<ModifyEntityResult<TEntity>>> Insert(TEntity entity)
        {
            var response = new HttpResponse<ModifyEntityResult<TEntity>>();

            if(entity is IHandleized)
            {
                (entity as IHandleized).Handle = Handleize((entity as IHandleized).HandleSource());
            }
            
            entity.LastModified = DateTime.Now;
                
            try
            {
                await _collection.InsertOneAsync(entity);
                var insertedEntities = new List<TEntity>();
                insertedEntities.Add(entity);

                response.Data = new ModifyEntityResult<TEntity>(insertedEntities)
                {
                    Created = insertedEntities.Count
                };

                if (insertedEntities.Count > 0)
                {
                    response.SetCreatedResource();
                }

                response.Message = $"Successfully created resource [{typeof(TEntity).Name} ({entity.Id})].";
                return response;
            }
            catch (Exception ex)
            {
                response.SetInternalError(ex);
                return response;
            }
        }

        public async Task<HttpResponse<ModifyEntityResult<TEntity>>> Delete(string id)
        {
            var response = new HttpResponse<ModifyEntityResult<TEntity>>();
            var builderFilter = Builders<TEntity>.Filter;
            var filter = builderFilter.Eq(e => e.Id, id);
            try
            {
                var toDelete = await _collection.Find(filter).FirstOrDefaultAsync();
                var result = await _collection.DeleteOneAsync(filter);

                if (toDelete != null && result.DeletedCount > 0 && result.IsAcknowledged)
                {
                    var deletedEntities = new List<TEntity>();
                    deletedEntities.Add(toDelete);

                    response.Message = $"Successfuly deleted resource [{typeof(TEntity).Name} ({toDelete.Id})].";
                    response.Data = new ModifyEntityResult<TEntity>(deletedEntities)
                    {
                        Created = deletedEntities.Count
                    };
                }
                else
                {
                    response.Message = $"Deleted {result.DeletedCount} {typeof(TEntity).Name} resource.";
                    response.Data = new ModifyEntityResult<TEntity>()
                    {
                        Created = 0
                    };
                }
                return response;
            }
            catch (Exception ex)
            {
                response.SetInternalError(ex);
                return response;
            }
        }

        public async Task<HttpResponse<ModifyEntityResult<TEntity>>> Archive(string id)
        {
            var response = new HttpResponse<ModifyEntityResult<TEntity>>();
            var filterBuilder = Builders<TEntity>.Filter;
            var filter = filterBuilder.Eq(e => e.Id, id);

            var update = Builders<TEntity>.Update.Set(e => e.Archived, true).CurrentDate(e => e.LastModified);
            
            try
            {
                var toArchive = await _collection.Find(filter).FirstOrDefaultAsync();
                var result = await _collection.UpdateOneAsync(filter, update);

                if (toArchive != null && result.ModifiedCount > 0 && result.IsAcknowledged)
                {
                    var archivedEntities = new List<TEntity>();
                    archivedEntities.Add(toArchive);

                    response.Message = $"Successfully archived resource [{typeof(TEntity).Name} ({toArchive.Id}]).";
                    response.Data = new ModifyEntityResult<TEntity>(archivedEntities)
                    {
                        Modified = (int)result.ModifiedCount
                    };
                }
                else
                {
                    response.Message = $"Archived {result.ModifiedCount} {typeof(TEntity).Name} resource.";
                    response.Data = new ModifyEntityResult<TEntity>()
                    {
                        Modified = 0
                    };
                }
                return response;
            }
            catch (Exception ex)
            {
                response.SetInternalError(ex);
                return response;
            }
        }

        public async Task<HttpResponse<ModifyEntityResult<TEntity>>> Update(TEntity entity)
        {
            var response = new HttpResponse<ModifyEntityResult<TEntity>>();
            var filterBuilder = Builders<TEntity>.Filter;
            var filter = filterBuilder.Eq(e => e.Id, entity.Id);

            entity.LastModified = DateTime.Now;

            try
            {
                var toUpdate = await _collection.Find(filter).FirstOrDefaultAsync();
                var result = await _collection.ReplaceOneAsync(filter, entity, new UpdateOptions { IsUpsert = false });

                if (result.ModifiedCount > 0 && result.IsAcknowledged)
                {
                    var updatedEntites = new List<TEntity>();
                    updatedEntites.Add(toUpdate);

                    response.Message = $"Successfully updated resource [{typeof(TEntity).Name} ({toUpdate.Id}]).";
                    response.Data = new ModifyEntityResult<TEntity>(updatedEntites)
                    {
                        Modified = updatedEntites.Count
                    };
                }
                else
                {
                    response.Message = $"Modified {result.ModifiedCount} of {result.MatchedCount} matched {typeof(TEntity).Name} resource.";
                    response.Data = new ModifyEntityResult<TEntity>()
                    {
                        Modified = 0
                    };
                }
                return response;
            }
            catch (Exception ex)
            {
                response.SetInternalError(ex);
                return response;
            }
        }
        
        private string Handleize(string str)
        {
            var toReplace = new String[] { "\"", "'", "\\\\", "(\", \")", "[\", \"]" };
            str = str.Normalize(System.Text.NormalizationForm.FormD);
            str = Regex.Replace(str, @"/[\u0300-\u036f]", "").ToLower();

            foreach(var r in toReplace) str = str.Replace(r, "");
            str = Regex.Replace(str, @"/\W+|\s+", "-");

            if(str[str.Length - 1] == '-') str = Regex.Replace(str, @"/-+\z/", "");
            if(str[0] == '-') str = Regex.Replace(str, @"/\A-+/", "");
            return str;
        }
    }
}