using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using Models.Components;

namespace Repositories.Components
{
    public class CommentRepository : EntityRepository<Comment>
    {
        public CommentRepository(IConfiguration config) 
            : base(config, "comments") { }
    }
}