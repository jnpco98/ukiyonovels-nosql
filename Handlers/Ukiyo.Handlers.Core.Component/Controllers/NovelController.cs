using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;
using Ukiyo.Handlers.Query;
using Ukiyo.HttpResponse;
using Ukiyo.Models.Components;
using Ukiyo.Repositories;

namespace Ukiyo.Handlers.Core.Component
{
    public class NovelQuery : BaseQuery
    {
        public string Author { get; set; } = "";
        public string Origin { get; set; } = "";
        public string Genre { get; set; } = "";
        public string Tag { get; set; } = "";
    }

    [Route("api/[controller]")]
    [ApiController]
    public class NovelController : ControllerBase
    {
        private readonly NovelRepository _novelRepository;

        public NovelController(IEntityRepository<Novel> novelRepository)
        {
            _novelRepository = (NovelRepository) novelRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IResponse>> GetAll([FromQuery] NovelQuery query)
        {
            if (query == null)
            {
                query = new NovelQuery();
            }

            var filterBuilder = Builders<Novel>.Filter;
            var filters = new List<FilterDefinition<Novel>>();

            var sortBuilder = Builders<Novel>.Sort; 
            var sort = query.Order.ToLower() == "asc" ? 
                sortBuilder.Ascending(n => n.Title) : sortBuilder.Descending(n => n.Title);

            if (!string.IsNullOrWhiteSpace(query.Author))
            {
                filters.Add(filterBuilder.ElemMatch(n => n.Authors,
                    a => a.Name.ToLower() == query.Author.ToLower()));
            }

            if (!string.IsNullOrWhiteSpace(query.Origin))
            {
                filters.Add(filterBuilder.ElemMatch(n => n.Origins, 
                    o => o.Name.ToLower() == query.Origin.ToLower()));
            }

            if (!string.IsNullOrWhiteSpace(query.Genre))
            {
                filters.Add(filterBuilder.ElemMatch(n => n.Genres, 
                    g => g.Name.ToLower() == query.Genre.ToLower()));
            }

            if (!string.IsNullOrWhiteSpace(query.Tag))
            {
                filters.Add(filterBuilder.ElemMatch(n => n.Tags, 
                    t => t.Name.ToLower() == query.Tag.ToLower()));
            }

            var accumulatedFilter = filters.Count > 0 ? filterBuilder.And(filters) : null;

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
    }
}