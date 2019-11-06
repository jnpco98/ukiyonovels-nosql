using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using Models;
using External.Extensions.MongoDB;
using HttpResponse;
using System.Linq;

namespace Repositories
{ 
    public abstract class EntityRepository<TEntity> : IEntityRepository<TEntity> where TEntity : Entity
    {
        public int Limit { get; protected set; } = 50;
        
        protected readonly IMongoCollection<TEntity> _collection;
        protected string[] _queryable = new string[] {};

        public EntityRepository(IConfiguration config, string collection)
        {
            var client = new MongoClient(config.GetConnectionString("Database:DBConn"));
            var database = client.GetDatabase(config.GetValue<string>("Database:DBName"));
            _collection = database.GetCollection<TEntity>(collection);
        }

        protected FilterDefinition<TEntity> BuildQuery(IDictionary<string, string> fieldEqValue = null, IDictionary<string, IEnumerable<string>> fieldMatchValues = null, IEnumerable<string> ids = null)
        {
            var filters = new List<FilterDefinition<TEntity>>();
            var filterBuilder = Builders<TEntity>.Filter;
            var _queryableLower = _queryable.Select(q => q.ToLower());

            if(fieldEqValue != null && fieldEqValue.Any())
            {
                filters.Add(fieldEqValue
                    .Where(f => _queryableLower.Contains(f.Key.ToLower()))
                    .Select(f => filterBuilder.Eq(f.Key, f.Value))
                    .Aggregate((curr, acc) => curr | acc)
                );
            }

            if(fieldMatchValues != null && fieldMatchValues.Any())
            {
                filters.Add(fieldMatchValues.Where(f => _queryableLower.Contains(f.Key.ToLower()))
                    .Select(f => f.Value
                        .Select(v => filterBuilder.Eq(f.Key, v))
                        .Aggregate((curr, acc) => curr | acc))
                    .Aggregate((curr, acc) => curr | acc)
                );
            }

            if(ids != null && ids.Any())
            {
                filters.Add(ids
                    .Select(id => filterBuilder.Eq("_id", id))
                    .Aggregate((acc, curr) => acc | curr)
                );
            }

            return Builders<TEntity>.Filter.Or(filters);
        }

        protected async Task<Response<IEnumerable<TEntity>>> Paginate(int page, int count = 5, FilterDefinition<TEntity> filter = null, SortDefinition<TEntity> sort = null, ProjectionDefinition<TEntity> projection = null)
        {
            if(count > Limit) count = Limit;
            var response = new Response<IEnumerable<TEntity>>();

            try 
            {
                var query = _collection.Find<TEntity>(filter ?? Builders<TEntity>.Filter.Empty)
                                    .Limit(count).Skip(page * count)
                                    .Sort(sort ?? Builders<TEntity>.Sort.Ascending(e => e.Id))
                                    .Project<TEntity>(projection);

                var result = await query.ToListAsync();
                response.Data = result;
                
                if(result == null || result.Count < 1)
                {
                    if(filter != null)
                    {
                        response.Message = $"No document was found that matches the filter.";
                    }
                    else
                    {
                        response.Message = "Collection is empty.";
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

        public async Task<Response<TEntity>> Get(string id)
        {
            var response = new Response<TEntity>();
            try 
            {
                var query = _collection.Find(e => e.Id == id);
                var result = await query.FirstOrDefaultAsync();
                response.Data = result;
                
                if(result == null)
                {
                    response.Message = $"Entity {id} not found.";
                }

                return response;
            }
            catch (Exception ex)
            {
                response.SetInternalError(ex);
                return response;
            }
        }

        public async Task<Response<ModifyEntityResult<TEntity>>> Insert(TEntity entity)
        {
            var response = new Response<ModifyEntityResult<TEntity>>();
            try
            {
                await _collection.InsertOneAsync(entity);
                var insertedEntities = new List<TEntity>();
                insertedEntities.Add(entity);

                response.Data = new ModifyEntityResult<TEntity>(insertedEntities)
                {
                    Created = insertedEntities.Count
                };

                response.Message = $"Successfully created {entity.Id}.";
                return response;
            }
            catch (Exception ex)
            {
                response.SetInternalError(ex);
                return response;
            }

        }

        public async Task<Response<ModifyEntityResult<TEntity>>> Delete(string id)
        {
            var response = new Response<ModifyEntityResult<TEntity>>();

            var filter = Builders<TEntity>.Filter.Eq(e => e.Id, id);
            try
            {
                var toDelete = await _collection.Find(filter).FirstOrDefaultAsync();
                var result = await _collection.DeleteOneAsync(filter);

                if(toDelete != null && result.DeletedCount > 0 && result.IsAcknowledged)
                {
                    var deletedEntities = new List<TEntity>();
                    deletedEntities.Add(toDelete);

                    response.Message = $"Successfuly deleted {toDelete.Id}.";
                    response.Data = new ModifyEntityResult<TEntity>(deletedEntities)
                    {
                        Created = deletedEntities.Count
                    };
                }
                else
                {
                    response.Message = $"Deleted {result.DeletedCount} documents.";
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

        public async Task<Response<ModifyEntityResult<TEntity>>> Archive(string id)
        {
            var response = new Response<ModifyEntityResult<TEntity>>();

            var filter = Builders<TEntity>.Filter.Eq(e => e.Id, id);
            var update = Builders<TEntity>.Update
                                        .Set(e => e.Archived, true)
                                        .CurrentDate(e => e.LastModified);
            try
            {
                var toArchive = await _collection.Find(filter).FirstOrDefaultAsync();
                var result = await _collection.UpdateOneAsync(filter, update);

                if(toArchive != null && result.ModifiedCount > 0 && result.IsAcknowledged)
                {
                    var archivedEntities = new List<TEntity>();
                    archivedEntities.Add(toArchive);
                    
                    response.Message = $"Successfully archived {toArchive.Id}.";
                    response.Data = new ModifyEntityResult<TEntity>(archivedEntities)
                    {
                        Modified = (int)result.ModifiedCount
                    };
                }
                else
                {
                    response.Message = $"Archived {result.ModifiedCount} documents.";
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

        public async Task<Response<ModifyEntityResult<TEntity>>> Update(string id, TEntity entity)
        {
            var response = new Response<ModifyEntityResult<TEntity>>();
            var filter = Builders<TEntity>.Filter.Eq(e => e.Id, id);
            
            try
            {
                var toUpdate = await _collection.Find(filter).FirstOrDefaultAsync();
                var result = await _collection.ReplaceOneAsync(filter, entity, new UpdateOptions { IsUpsert = true });
                
                if(result.ModifiedCount > 0 && result.IsAcknowledged)
                {
                    var updatedEntites = new List<TEntity>();
                    updatedEntites.Add(toUpdate);

                    response.Message = $"Successfully updated {toUpdate.Id}.";
                    response.Data = new ModifyEntityResult<TEntity>(updatedEntites)
                    {
                        Modified = updatedEntites.Count
                    };
                }
                else
                {
                    response.Message = $"Modified {result.ModifiedCount} of {result.MatchedCount} matched documents.";
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
    }
}