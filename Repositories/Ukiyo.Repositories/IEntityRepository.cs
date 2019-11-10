using System.Threading.Tasks;
using Ukiyo.HttpResponse;
using Ukiyo.Models.Components;
using Ukiyo.Repositories.Results;

namespace Ukiyo.Repositories
{
    public interface IEntityRepository<TEntity> where TEntity : Entity
    {
        Task<HttpResponse<TEntity>> Get(string id);

        Task<HttpResponse<ModifyEntityResult<TEntity>>> Insert(TEntity entity);

        Task<HttpResponse<ModifyEntityResult<TEntity>>> Delete(string id);

        Task<HttpResponse<ModifyEntityResult<TEntity>>> Archive(string id);

        Task<HttpResponse<ModifyEntityResult<TEntity>>> Update(string id, TEntity entity);
    }
}