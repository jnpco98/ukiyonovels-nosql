using Microsoft.Extensions.Configuration;
using Ukiyo.Models.Components;

namespace Ukiyo.Repositories
{
    public class ChapterRepository : EntityRepository<Chapter>
    {
        public ChapterRepository(IConfiguration config)
            : base(config, "chapters") { }
    }
}