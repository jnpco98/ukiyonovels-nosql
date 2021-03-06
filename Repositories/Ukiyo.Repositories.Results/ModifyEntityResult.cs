using System.Collections.Generic;
using Ukiyo.Models.Components;

namespace Ukiyo.Repositories.Results
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