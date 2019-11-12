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
    public class BookQuery
    {
        public int Page { get; set; } = 0;
        public int Count { get; set; } = 15;

        [Required]
        public string Novel { get; set; }
        public string Order { get; set; } = "desc";
    }

    [ApiController]
    [Route("api/[controller]")]
    public class BookController : ControllerBase
    {
        private readonly BookRepository _bookRepository;
        private readonly NovelRepository _novelRepository;

        public BookController(IEntityRepository<Book> bookRepository, IEntityRepository<Novel> novelRepository)
        {
            _bookRepository = (BookRepository)bookRepository;
            _novelRepository = (NovelRepository)novelRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IResponse>> GetAll([FromQuery] BookQuery query)
        {
            if (query == null)
            {
                query = new BookQuery();
            }

            var filterBuilder = Builders<Book>.Filter;
            var filters = new List<FilterDefinition<Book>>();

            var sortBuilder = Builders<Book>.Sort;
            var sort = query.Order.ToLower() == "asc" ?
                sortBuilder.Ascending(b => b.Title) : sortBuilder.Descending(b => b.Title);

            var novel = (await _novelRepository.Get(query.Novel)).Data;
            filters.Add(filterBuilder.Where(b => novel.Books.Contains(b.Id)));

            return await _bookRepository.Paginate(query.Page, query.Count, filterBuilder.And(filters), sort);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IResponse>> GetOne(string id) =>
            await _bookRepository.Get(id);

        [HttpPost]
        public async Task<ActionResult<IResponse>> InsertOne(Book book) =>
            await _bookRepository.Insert(book);

        [HttpDelete("{id}")]
        public async Task<ActionResult<IResponse>> DeleteOne(string id) =>
            await _bookRepository.Archive(id);

        [HttpPut]
        public async Task<ActionResult<IResponse>> UpdateOne(Book book) =>
            await _bookRepository.Update(book);
    }
}