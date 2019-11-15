using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;
using Ukiyo.HttpResponse;
using Ukiyo.Models.Components;
using Ukiyo.Repositories;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using Ukiyo.Handlers.Query;

namespace Ukiyo.Handlers.Core.Component
{
    public class BookQuery : BaseQuery
    {
        [Required]
        public string Novel { get; set; } = "";
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

            if (!string.IsNullOrWhiteSpace(query.Novel))
            {
                var novel = (await _novelRepository.Get(query.Novel)).Data;

                if (novel != null)
                {
                    filters.Add(filterBuilder.Where(b => novel.Books.Contains(b.Id)));
                }
            }

            var accumulatedFilter = filters.Count > 0 ? filterBuilder.And(filters) : null;

            return await _bookRepository.Paginate(query.Page, query.Count, accumulatedFilter, sort);
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