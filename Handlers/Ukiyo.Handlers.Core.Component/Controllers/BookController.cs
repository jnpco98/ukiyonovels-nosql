using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;
using Ukiyo.HttpResponse;
using Ukiyo.Models.Components;
using Ukiyo.Repositories;
using System.Linq;
using System.ComponentModel.DataAnnotations;

namespace Ukiyo.Handlers.Core.Component
{
    internal class BookQuery
    {
        internal int page = 0;
        internal int count = 15;
        [Required]
        internal string novel;
        internal string order;
    }

    [ApiController]
    [Route("api/[controller]")]
    internal class BookController : ControllerBase
    {
        private readonly BookRepository _bookRepository;
        private readonly NovelRepository _novelRepository;

        public BookController(IEntityRepository<Book> bookRepository, IEntityRepository<Novel> novelRepository)
        {
            _bookRepository = (BookRepository) bookRepository;
            _novelRepository = (NovelRepository) novelRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IResponse>> GetAll([FromQuery] BookQuery query)
        {
            var filterBuilder = Builders<Book>.Filter;
            var filters = new List<FilterDefinition<Book>>();

            var sortBuilder = Builders<Book>.Sort;
            var sort = query.order.ToLower() == "descending" ?
                sortBuilder.Descending(b => b.Title) : sortBuilder.Ascending(b => b.Title);

            var novel = (await _novelRepository.Get(query.novel)).Data;
            filters.Add(filterBuilder.Where(b => novel.Books.Contains(b.Id)));

            return await _bookRepository.Paginate(query.page, query.count, filterBuilder.And(filters), sort);
        }

        [HttpGet]
        public async Task<ActionResult<IResponse>> GetOne(string id) =>
            await _bookRepository.Get(id);

        [HttpPost]
        public async Task<ActionResult<IResponse>> InsertOne(Book book) =>
            await _bookRepository.Insert(book);

        [HttpDelete]
        public async Task<ActionResult<IResponse>> DeleteOne(string id) =>
            await _bookRepository.Archive(id);

        [HttpPost]
        public async Task<ActionResult<IResponse>> UpdateOne(Book book) =>
            await _bookRepository.Update(book);
    }
}