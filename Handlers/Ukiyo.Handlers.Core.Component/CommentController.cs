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
    internal class CommentQuery
    {
        internal int page = 0;
        internal int count = 15;
        [Required]
        internal string chapter;
        internal string order;
    }

    [ApiController]
    [Route("api/[controller]")]
    internal class CommentController : ControllerBase
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
            var filterBuilder = Builders<Comment>.Filter;
            var filters = new List<FilterDefinition<Comment>>();

            var sortBuilder = Builders<Comment>.Sort;
            var sort = query.order.ToLower() == "descending" ?
                sortBuilder.Descending(r => r.LastModified) : sortBuilder.Ascending(r => r.LastModified);

            var chapter = (await _chapterRepository.Get(query.chapter)).Data;
            filters.Add(filterBuilder.Where(c => chapter.Comments.Contains(c.Id)));

            return await _commentRepository.Paginate(query.page, query.count, filterBuilder.And(filters), sort);
        }

        [HttpGet]
        public async Task<ActionResult<IResponse>> GetOne(string id) =>
            await _commentRepository.Get(id);

        [HttpPost]
        public async Task<ActionResult<IResponse>> InsertOne(Comment comment) =>
            await _commentRepository.Insert(comment);

        [HttpDelete]
        public async Task<ActionResult<IResponse>> DeleteOne(string id) =>
            await _commentRepository.Archive(id);

        [HttpPost]
        public async Task<ActionResult<IResponse>> UpdateOne(Comment comment) =>
            await _commentRepository.Update(comment);
    }
}