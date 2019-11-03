using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using Models.Components;

namespace Repositories.Components
{
    public class NovelRepository : EntityRepository<Novel>
    {
        public NovelRepository(IConfiguration config) 
            : base(config, "novels") { }
    }
}