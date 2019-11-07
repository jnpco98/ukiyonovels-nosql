using Microsoft.Extensions.Configuration;
using Models.Components;

namespace Repositories.Components
{
    public class ReviewRepository : EntityRepository<Review>
    {
        public ReviewRepository(IConfiguration config)
            : base(config, "reviews") { }
    }
}