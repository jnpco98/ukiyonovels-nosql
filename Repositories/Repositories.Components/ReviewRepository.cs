using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using Models.Components;

namespace Repositories.Components
{
    public class ReviewRepository : EntityRepository<Review>
    {
        public ReviewRepository(IConfiguration config) 
            : base(config, "reviews") { }
    }
}