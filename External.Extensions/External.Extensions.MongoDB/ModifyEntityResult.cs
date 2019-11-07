using System.Collections.Generic;
using Models;

namespace External.Extensions.MongoDB
{
    public class ModifyEntityResult<TEntity> where TEntity : Entity
    {
        public IEnumerable<TEntity> Entities { get; set; }

        public int Created { get; set; }

        public int Modified { get; set; }

        public int Deleted { get; set; }

        public ModifyEntityResult(IEnumerable<TEntity> entities = null)
        {
            if (entities != null)
            {
                Entities = entities;
            }
        }
    }
}