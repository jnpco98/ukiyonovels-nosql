using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Ukiyo.Handlers.Query;
using Ukiyo.HttpResponse;
using Ukiyo.Models.Components;
using Ukiyo.Repositories;

namespace Ukiyo.Handlers.Core.Component
{
    public class ReviewQuery : BaseQuery
    {
        [Required]
        public string Novel { get; set; } = "";
        public string Sort { get; set; } = "";
    }

    [ApiController]
    [Route("api/[controller]")]
    public class ReviewController : ControllerBase
    {
        private readonly ReviewRepository _reviewRepository;

        public ReviewController(IEntityRepository<Review> reviewRepository)
        {
            _reviewRepository = (ReviewRepository) reviewRepository;
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
                query.Order.ToLower() == SORT_ORDER.ASCENDING ?
                    sortBuilder.Ascending(r => r.Rating) : sortBuilder.Descending(r => r.Rating) :
                query.Order.ToLower() == SORT_ORDER.ASCENDING ?
                    sortBuilder.Ascending(r => r.LastModified) : sortBuilder.Descending(r => r.LastModified);

            if (!string.IsNullOrWhiteSpace(query.Novel))
            {
                filters.Add(filterBuilder.Where(r => r.Novel == query.Novel));
            }

            var accumulatedFilter = filters.Count > 0 ? filterBuilder.And(filters) : filterBuilder.Empty;

            return await _reviewRepository.Paginate(query.Page, query.Count, accumulatedFilter, sort);
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

        [HttpPut]
        public async Task<ActionResult<IResponse>> UpdateOne(Review review) =>
            await _reviewRepository.Update(review);
    }
}