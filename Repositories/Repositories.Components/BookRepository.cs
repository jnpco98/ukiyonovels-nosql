using Microsoft.Extensions.Configuration;
using Models.Components;

namespace Repositories.Components
{
    public class BookRepository : EntityRepository<Book>
    {
        public BookRepository(IConfiguration config)
            : base(config, "books") { }
    }
}