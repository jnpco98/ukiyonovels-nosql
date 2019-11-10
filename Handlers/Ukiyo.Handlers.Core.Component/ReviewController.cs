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
    internal class ReviewQuery
    {
        internal int page = 0;
        internal int count = 15;
        [Required]
        internal string novel;
        internal string sort;
        internal string order;
    }

    [ApiController]
    [Route("api/[controller]")]
    internal class ReviewController : ControllerBase
    {
        private readonly ReviewRepository _reviewRepository;
        private readonly NovelRepository _novelRepository;

        public ReviewController(IEntityRepository<Review> reviewRepository, IEntityRepository<Novel> novelRepository)
        {
            _reviewRepository = (ReviewRepository) reviewRepository;
            _novelRepository = (NovelRepository) novelRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IResponse>> GetAll([FromQuery] ReviewQuery query)
        {
            var filterBuilder = Builders<Review>.Filter;
            var filters = new List<FilterDefinition<Review>>();

            var sortBuilder = Builders<Review>.Sort;
            var sort = string.IsNullOrWhiteSpace(query.sort) && query.sort.ToLower() == "ratings" ?
                query.order.ToLower() == "descending" ?
                    sortBuilder.Descending(r => r.Rating) : sortBuilder.Ascending(r => r.Rating) :
                query.order.ToLower() == "descending" ?
                    sortBuilder.Descending(r => r.LastModified) : sortBuilder.Ascending(r => r.LastModified);

            var novel = (await _novelRepository.Get(query.novel)).Data;
            filters.Add(filterBuilder.Where(b => novel.Reviews.Contains(b.Id)));

            return await _reviewRepository.Paginate(query.page, query.count, filterBuilder.And(filters), sort);
        }

        [HttpGet]
        public async Task<ActionResult<IResponse>> GetOne(string id) =>
            await _reviewRepository.Get(id);

        [HttpPost]
        public async Task<ActionResult<IResponse>> InsertOne(Review review) =>
            await _reviewRepository.Insert(review);

        [HttpDelete]
        public async Task<ActionResult<IResponse>> DeleteOne(string id) =>
            await _reviewRepository.Archive(id);

        [HttpPost]
        public async Task<ActionResult<IResponse>> UpdateOne(Review review) =>
            await _reviewRepository.Update(review);
    }
}