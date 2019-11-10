using Microsoft.Extensions.Configuration;
using Ukiyo.Models.Components;

namespace Ukiyo.Repositories
{
    public class NovelRepository : EntityRepository<Novel>
    {
        public NovelRepository(IConfiguration config)
            : base(config, "novels") { }
    }
}