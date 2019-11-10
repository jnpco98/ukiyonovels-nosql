using System.Threading.Tasks;
using Ukiyo.HttpResponse;
using Ukiyo.Models.Components;
using Ukiyo.Repositories.Results;

namespace Ukiyo.Repositories
{
    public interface IEntityRepository<TEntity> where TEntity : Entity
    {
        Task<Response<TEntity>> Get(string id);

        Task<Response<ModifyEntityResult<TEntity>>> Insert(TEntity entity);

        Task<Response<ModifyEntityResult<TEntity>>> Delete(string id);

        Task<Response<ModifyEntityResult<TEntity>>> Archive(string id);

        Task<Response<ModifyEntityResult<TEntity>>> Update(string id, TEntity entity);
    }
}