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

        public BookController(IEntityRepository<Book> bookRepository)
        {
            _bookRepository = (BookRepository)bookRepository;
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
            var sort = query.Order.ToLower() == SORT_ORDER.ASCENDING ?
                sortBuilder.Ascending(b => b.Title) : sortBuilder.Descending(b => b.Title);

            if (!string.IsNullOrWhiteSpace(query.Novel))
            {
                filters.Add(filterBuilder.Where(b => b.Novel == query.Novel));
            }

            var accumulatedFilter = filters.Count > 0 ? filterBuilder.And(filters) : filterBuilder.Empty;

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