using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Ukiyo.Handlers.Query;
using Ukiyo.HttpResponse;
using Ukiyo.Models.Components;
using Ukiyo.Repositories;

namespace Ukiyo.Handlers.Core.Component
{
    public class ChapterQuery : BaseQuery
    {
        [Required]
        public string Novel { get; set; } = "";

        public string Book { get; set; } = "";
    }

    [ApiController]
    [Route("api/[controller]")]
    public class ChapterController : ControllerBase
    {
        private readonly ChapterRepository _chapterRepository;

        public ChapterController(IEntityRepository<Chapter> chapterRepository)
        {
            _chapterRepository = (ChapterRepository)chapterRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IResponse>> GetAll([FromQuery] ChapterQuery query)
        {
            if (query == null)
            {
                query = new ChapterQuery();
            }

            var filterBuilder = Builders<Chapter>.Filter;
            var filters = new List<FilterDefinition<Chapter>>();

            var sortBuilder = Builders<Chapter>.Sort;
            var sort = query.Order.ToLower() == SORT_ORDER.ASCENDING ?
                sortBuilder.Ascending(c => c.Title) : sortBuilder.Descending(c => c.Title);

            if (!string.IsNullOrWhiteSpace(query.Novel))
            {
                filters.Add(filterBuilder.Where(c => c.Novel == query.Novel));
            }

            if (!string.IsNullOrWhiteSpace(query.Book))
            {
                filters.Add(filterBuilder.Where(c => c.Book == query.Book));
            }

            var accumulatedFilter = filters.Count > 0 ? filterBuilder.And(filters) : filterBuilder.Empty;

            return await _chapterRepository.Paginate(query.Page, query.Count, accumulatedFilter, sort);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IResponse>> GetOne(string id) =>
            await _chapterRepository.Get(id);

        [HttpPost]
        public async Task<ActionResult<IResponse>> InsertOne(Chapter chapter) =>
            await _chapterRepository.Insert(chapter);

        [HttpDelete("{id}")]
        public async Task<ActionResult<IResponse>> DeleteOne(string id) =>
            await _chapterRepository.Archive(id);

        [HttpPut]
        public async Task<ActionResult<IResponse>> UpdateOne(Chapter chapter) =>
            await _chapterRepository.Update(chapter);
    }
}