using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Database;

namespace DataAccess
{
    public class EFDbContext : DbContext
    {
        public EFDbContext()
            : base("name=DbConnectionString")
        {
        }

        public new IDbSet<TEntity> Set<TEntity>() where TEntity : BaseEntity
        {
            return base.Set<TEntity>();
        }
    }
}
