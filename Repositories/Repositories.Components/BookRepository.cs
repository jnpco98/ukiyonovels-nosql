using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using Models.Components;

namespace Repositories.Components
{
    public class BookRepository : EntityRepository<Book>
    {
        public BookRepository(IConfiguration config) 
            : base(config, "books") { }
    }
}