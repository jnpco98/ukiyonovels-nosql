using Microsoft.Extensions.Configuration;
using Models.Components;

namespace Repositories.Components
{
    public class CommentRepository : EntityRepository<Comment>
    {
        public CommentRepository(IConfiguration config)
            : base(config, "comments") { }
    }
}