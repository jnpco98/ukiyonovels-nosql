using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using System.Threading.Tasks;
using Ukiyo.HttpResponse;
using Ukiyo.Models.Components;
using Ukiyo.Repositories;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Ukiyo.Handlers.Core.Component
{
    public class ChapterQuery
    {
        public int Page { get; set; } = 0;
        public int Count { get; set; } = 30;
        [Required]
        public string Novel { get; set; }
        public string Book { get; set; }
        public string Order { get; set; } = "desc";
    }

    [ApiController]
    [Route("api/[controller]")]
    public class ChapterController : ControllerBase
    {
        private readonly ChapterRepository _chapterRepository;
        private readonly NovelRepository _novelRepository;
        private readonly BookRepository _bookRepository;

        public ChapterController(IEntityRepository<Chapter> chapterRepository, IEntityRepository<Novel> novelRepository, IEntityRepository<Book> bookRepository)
        {
            _chapterRepository = (ChapterRepository) chapterRepository;
            _novelRepository = (NovelRepository) novelRepository;
            _bookRepository = (BookRepository) bookRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IResponse>> GetAll([FromQuery] ChapterQuery query)
        {
            if(query == null)
            {
                query = new ChapterQuery();
            }

            var filterBuilder = Builders<Chapter>.Filter;
            var filters = new List<FilterDefinition<Chapter>>();

            var sortBuilder = Builders<Chapter>.Sort;
            var sort = query.Order.ToLower() == "asc" ?
                sortBuilder.Ascending(c => c.Title) : sortBuilder.Descending(c => c.Title);

            var novel = (await _novelRepository.Get(query.Novel)).Data;
            filters.Add(filterBuilder.Where(c => novel.Chapters.Contains(c.Id)));

            if(query.Book != null)
            {
                var book = (await _bookRepository.Get(query.Book)).Data;
                filters.Add(filterBuilder.Where(c => book.Chapters.Contains(c.Id)));
            }

            return await _chapterRepository.Paginate(query.Page, query.Count, filterBuilder.And(filters), sort);
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