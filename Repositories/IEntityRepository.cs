using System.Threading.Tasks;
using External.Extensions.MongoDB;
using HttpResponse;
using Models;

namespace Repositories 
{
    interface IEntityRepository<TEntity> where TEntity : Entity
    {
        Task<Response<TEntity>> Get(string id);

        Task<Response<ModifyEntityResult<TEntity>>> Insert(TEntity entity);

        Task<Response<ModifyEntityResult<TEntity>>> Delete(string id);

        Task<Response<ModifyEntityResult<TEntity>>> Archive(string id);

        Task<Response<ModifyEntityResult<TEntity>>> Update(string id, TEntity entity);
    }
}