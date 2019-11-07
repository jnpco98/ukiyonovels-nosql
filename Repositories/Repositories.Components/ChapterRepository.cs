using Microsoft.Extensions.Configuration;
using Models.Components;

namespace Repositories.Components
{
    public class ChapterRepository : EntityRepository<Chapter>
    {
        public ChapterRepository(IConfiguration config)
            : base(config, "chapters") { }
    }
}