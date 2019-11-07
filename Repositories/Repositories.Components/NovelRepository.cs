using Microsoft.Extensions.Configuration;
using Models.Components;

namespace Repositories.Components
{
    public class NovelRepository : EntityRepository<Novel>
    {
        public NovelRepository(IConfiguration config)
            : base(config, "novels") { }
    }
}