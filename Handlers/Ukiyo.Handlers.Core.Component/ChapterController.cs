using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using System.Threading.Tasks;
using Ukiyo.HttpResponse;
using Ukiyo.Models.Components;
using Ukiyo.Repositories;
using System.Linq;
using System.Collections.Generic;

namespace Ukiyo.Handlers.Core.Component
{
    // Needs novel id and book id(optional)
    internal class ChapterQuery
    {
        internal int page = 0;
        internal int count = 15;
        internal string book;
        internal string order;
    }

    [ApiController]
    [Route("api/[controller]")]
    internal class ChapterController : ControllerBase
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
        public async Task<ActionResult<IResponse>> GetAll(string novelId, [FromQuery] ChapterQuery query)
        {
            var filterBuilder = Builders<Chapter>.Filter;
            var filters = new List<FilterDefinition<Chapter>>();

            var sortBuilder = Builders<Chapter>.Sort;
            var sort = query.order.ToLower() == "descending" ?
                sortBuilder.Descending(n => n.Title) : sortBuilder.Ascending(n => n.Title);

            var novel = (await _novelRepository.Get(novelId)).Data;
            filters.Add(filterBuilder.Where(c => novel.Chapters.Contains(c.Id)));

            if(query.book != null)
            {
                var book = (await _bookRepository.Get(query.book)).Data;
                filters.Add(filterBuilder.Where(c => book.Chapters.Contains(c.Id)));
            }

            return await _chapterRepository.Paginate(query.page, query.count, filterBuilder.And(filters), sort);
        }

        [HttpGet]
        public async Task<ActionResult<IResponse>> GetOne(string id) =>
            await _chapterRepository.Get(id);

        [HttpPost]
        public async Task<ActionResult<IResponse>> InsertOne(Chapter chapter) =>
            await _chapterRepository.Insert(chapter);

        [HttpDelete]
        public async Task<ActionResult<IResponse>> DeleteOne(string id) =>
            await _chapterRepository.Archive(id);

        [HttpPut]
        public async Task<ActionResult<IResponse>> UpdateOne(Chapter chapter) =>
            await _chapterRepository.Update(chapter);
    }
}