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
    public class ReviewQuery
    {
        public int Page { get; set; } = 0;
        public int Count { get; set; } = 15;
        [Required]
        public string Novel { get; set; }
        public string Sort { get; set; } = "";
        public string Order { get; set; } = "desc";
    }

    [ApiController]
    [Route("api/[controller]")]
    public class ReviewController : ControllerBase
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
            if(query == null)
            {
                query = new ReviewQuery();
            }

            var filterBuilder = Builders<Review>.Filter;
            var filters = new List<FilterDefinition<Review>>();

            var sortBuilder = Builders<Review>.Sort;
            var sort = string.IsNullOrWhiteSpace(query.Sort) || query.Sort.ToLower() == "ratings" ?
                query.Order.ToLower() == "asc" ?
                    sortBuilder.Ascending(r => r.Rating) : sortBuilder.Descending(r => r.Rating) :
                query.Order.ToLower() == "asc" ?
                    sortBuilder.Ascending(r => r.LastModified) : sortBuilder.Descending(r => r.LastModified);

            var novel = (await _novelRepository.Get(query.Novel)).Data;
            filters.Add(filterBuilder.Where(b => novel.Reviews.Contains(b.Id)));

            return await _reviewRepository.Paginate(query.Page, query.Count, filterBuilder.And(filters), sort);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IResponse>> GetOne(string id) =>
            await _reviewRepository.Get(id);

        [HttpPost]
        public async Task<ActionResult<IResponse>> InsertOne(Review review) =>
            await _reviewRepository.Insert(review);

        [HttpDelete("{id}")]
        public async Task<ActionResult<IResponse>> DeleteOne(string id) =>
            await _reviewRepository.Archive(id);

        [HttpPost]
        public async Task<ActionResult<IResponse>> UpdateOne(Review review) =>
            await _reviewRepository.Update(review);
    }
}