using Microsoft.Extensions.Configuration;
using Ukiyo.Models.Components;

namespace Ukiyo.Repositories
{
    public class BookRepository : EntityRepository<Book>
    {
        public BookRepository(IConfiguration config)
            : base(config, "books") { }
    }
}