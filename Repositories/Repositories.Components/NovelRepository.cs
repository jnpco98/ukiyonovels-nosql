using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using Models.Components;
using HttpResponse;
using System.Linq;

namespace Repositories.Components
{
    public class NovelRepository : EntityRepository<Novel>
    {
        protected new string[] _queryable = new string[] { "title", "author", "genres", "tags", "last_modified", "origins" };
        
        public NovelRepository(IConfiguration config) 
            : base(config, "novels") { }

        public async Task<Response<IEnumerable<Novel>>> AdvancedSearch (int page, int count, IDictionary<string, string> fieldEqValue = null, IDictionary<string, IEnumerable<string>> fieldMatchValues = null, SortDefinition<Novel> sort = null, ProjectionDefinition<Novel> projection = null)
        {
            var filter = BuildQuery(fieldEqValue, fieldMatchValues);
            return await this.Paginate(page, count, filter, sort, projection);
        }
    }
}