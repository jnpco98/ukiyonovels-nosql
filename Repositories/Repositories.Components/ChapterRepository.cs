using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using Models.Components;

namespace Repositories.Components
{
    public class ChapterRepository : EntityRepository<Chapter>
    {
        public ChapterRepository(IConfiguration config) 
            : base(config, "chapters") { }
    }
}