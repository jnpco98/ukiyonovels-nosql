using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Ukiyo.HttpResponse;
using Ukiyo.Models.Components;
using Ukiyo.Repositories;

namespace Ukiyo.Handlers.Core.Component
{
    public class CommentQuery
    {
        public int Page { get; set; }
        public int Count { get; set; }
        [Required]
        public string Chapter { get; set; }
        public string Order { get; set; } = "desc";
    }

    [ApiController]
    [Route("api/[controller]")]
    public class CommentController : ControllerBase
    {
        private readonly CommentRepository _commentRepository;
        private readonly ChapterRepository _chapterRepository;

        public CommentController(IEntityRepository<Comment> commentRepository, IEntityRepository<Chapter> chapterRepository)
        {
            _commentRepository = (CommentRepository) commentRepository;
            _chapterRepository = (ChapterRepository) chapterRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IResponse>> GetAll([FromQuery] CommentQuery query)
        {
            if(query == null)
            {
                query = new CommentQuery();
            }

            var filterBuilder = Builders<Comment>.Filter;
            var filters = new List<FilterDefinition<Comment>>();

            var sortBuilder = Builders<Comment>.Sort;
            var sort = query.Order.ToLower() == "asc" ?
                sortBuilder.Ascending(r => r.LastModified) : sortBuilder.Descending(r => r.LastModified);

            var chapter = (await _chapterRepository.Get(query.Chapter)).Data;
            filters.Add(filterBuilder.Where(c => chapter.Comments.Contains(c.Id)));

            return await _commentRepository.Paginate(query.Page, query.Count, filterBuilder.And(filters), sort);
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

        [HttpPost]
        public async Task<ActionResult<IResponse>> UpdateOne(Comment comment) =>
            await _commentRepository.Update(comment);
    }
}