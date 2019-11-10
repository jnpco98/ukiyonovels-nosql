using Microsoft.Extensions.Configuration;
using Ukiyo.Models.Components;

namespace Ukiyo.Repositories
{
    public class ReviewRepository : EntityRepository<Review>
    {
        public ReviewRepository(IConfiguration config)
            : base(config, "reviews") { }
    }
}