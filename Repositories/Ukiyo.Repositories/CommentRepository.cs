using Microsoft.Extensions.Configuration;
using Ukiyo.Models.Components;

namespace Ukiyo.Repositories
{
    public class CommentRepository : EntityRepository<Comment>
    {
        public CommentRepository(IConfiguration config)
            : base(config, "comments") { }
    }
}