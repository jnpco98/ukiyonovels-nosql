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
    public class CommentQuery : BaseQuery
    {
        [Required]
        public string Chapter { get; set; } = "";
    }

    [ApiController]
    [Route("api/[controller]")]
    public class CommentController : ControllerBase
    {
        private readonly CommentRepository _commentRepository;
        private readonly ChapterRepository _chapterRepository;

        public CommentController(IEntityRepository<Comment> commentRepository, IEntityRepository<Chapter> chapterRepository)
        {
            _commentRepository = (CommentRepository)commentRepository;
            _chapterRepository = (ChapterRepository)chapterRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IResponse>> GetAll([FromQuery] CommentQuery query)
        {
            if (query == null)
            {
                query = new CommentQuery();
            }

            var filterBuilder = Builders<Comment>.Filter;
            var filters = new List<FilterDefinition<Comment>>();

            var sortBuilder = Builders<Comment>.Sort;
            var sort = query.Order.ToLower() == SortOrder.ASCENDING ?
                sortBuilder.Ascending(r => r.LastModified) : sortBuilder.Descending(r => r.LastModified);

            if (!string.IsNullOrWhiteSpace(query.Chapter))
            {
                filters.Add(filterBuilder.Where(c => c.Chapter == query.Chapter));
            }

            var accumulatedFilter = filters.Count > 0 ? filterBuilder.And(filters) : filterBuilder.Empty;

            return await _commentRepository.Paginate(query.Page, query.Count, accumulatedFilter, sort);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IResponse>> GetOne(string id) =>
            await _commentRepository.Get(id);

        [HttpPost]
        public async Task<ActionResult<IResponse>> InsertOne(Comment comment) =>
            await _commentRepository.Insert(comment);

        [HttpDelete("{id}")]
        public async Task<ActionResult<IResponse>> DeleteOne(string id) =>
            await _commentRepository.Archive(id);

        [HttpPut]
        public async Task<ActionResult<IResponse>> UpdateOne(Comment comment) =>
            await _commentRepository.Update(comment);
    }
}