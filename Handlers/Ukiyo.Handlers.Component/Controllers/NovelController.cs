using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;
using Ukiyo.Handlers.Query;
using Ukiyo.HttpResponse;
using Ukiyo.Infrastructure;
using Ukiyo.Models.Components;
using Ukiyo.Repositories;
using System.Linq;
using System.Linq.Expressions;
using System;

namespace Ukiyo.Handlers.Core.Component
{
    public class NovelQuery : BaseQuery
    {
        [ModelBinder(BinderType = typeof(CommaSeparatedModelBinder))]
        public List<string> Author { get; set; } = new List<string>();
        [ModelBinder(BinderType = typeof(CommaSeparatedModelBinder))]
        public List<string> Artist { get; set; } = new List<string>();
        [ModelBinder(BinderType = typeof(CommaSeparatedModelBinder))]
        public List<string> Origin { get; set; } = new List<string>();
        [ModelBinder(BinderType = typeof(CommaSeparatedModelBinder))]
        public List<string> Genre { get; set; } = new List<string>();
        [ModelBinder(BinderType = typeof(CommaSeparatedModelBinder))]
        public List<string> Tag { get; set; } = new List<string>();
    }

    [Route("api/[controller]")]
    [ApiController]
    public class NovelController : ControllerBase
    {
        private readonly NovelRepository _novelRepository;

        public NovelController(IEntityRepository<Novel> novelRepository)
        {
            _novelRepository = (NovelRepository)novelRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IResponse>> GetAll([FromQuery] NovelQuery query)
        {
            if (query == null) query = new NovelQuery();

            var filterBuilder = Builders<Novel>.Filter;
            var filters = new List<FilterDefinition<Novel>>();

            filters.Add(BuildNovelQueryFilter(query.Artist, n => n.Artists));
            filters.Add(BuildNovelQueryFilter(query.Author, n => n.Authors));
            filters.Add(BuildNovelQueryFilter(query.Origin, n => n.Origins));
            filters.Add(BuildNovelQueryFilter(query.Genre, n => n.Genres));
            filters.Add(BuildNovelQueryFilter(query.Tag, n => n.Tags));

            var sortBuilder = Builders<Novel>.Sort;
            var sort = query.Order.ToLower() == SortOrder.DESCENDING.ToLower() ? sortBuilder.Descending(n => n.Title): sortBuilder.Ascending(n => n.Title);

            if(query.Sort.ToLower() == NovelSort.LAST_MODIFIED.ToLower())
            {
                sort = query.Order.ToLower() == SortOrder.DESCENDING.ToLower() ? sortBuilder.Descending(n => n.LastModified) : sortBuilder.Ascending(n => n.LastModified);
            }

            var accumulatedFilter = filters.Count > 0 ? filterBuilder.And(filters) : filterBuilder.Empty;

            return await _novelRepository.Paginate(query.Page, query.Count, accumulatedFilter, sort);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IResponse>> GetOne(string id) =>
            await _novelRepository.Get(id);

        [HttpPost]
        public async Task<ActionResult<IResponse>> InsertOne(Novel novel) =>
            await _novelRepository.Insert(novel);

        [HttpDelete("{id}")]
        public async Task<ActionResult<IResponse>> DeleteOne(string id) =>
            await _novelRepository.Archive(id);

        [HttpPut]
        public async Task<ActionResult<IResponse>> UpdateOne(Novel novel) =>
            await _novelRepository.Update(novel);

        private FilterDefinition<Novel> BuildNovelQueryFilter<TFilter>(IEnumerable<string> queryModel, Expression<Func<Novel, IEnumerable<TFilter>>> field) where TFilter : INovelFilter
        {
            var filterBuilder = Builders<Novel>.Filter;
            var filters = queryModel
                .Where(qm => !string.IsNullOrWhiteSpace(qm))
                .Select(qm => Builders<Novel>.Filter.ElemMatch(field, f => f.Name.ToLower() == qm.ToLower())).ToList();

            return Builders<Novel>.Filter.Or(filters.Count > 0 ? filterBuilder.Or(filters) : filterBuilder.Empty);
        }
    }
}