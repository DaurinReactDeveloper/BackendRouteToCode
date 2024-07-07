using Microsoft.EntityFrameworkCore;
using RouteToCode.Domain.Entities;
using RouteToCode.Domain.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteToCode.Infrastructure.Core
{
    public abstract class BaseRepository<Entity> : IBaseRepository<Entity> where Entity : class
    {
        private readonly DBBLOGContext DbContext;
        private readonly DbSet<Entity> DbSet;

        public BaseRepository(DBBLOGContext DbContext) {
            this.DbContext = DbContext;
            this.DbSet = this.DbContext.Set<Entity>();
        }

        public virtual List<Entity> GetEntities()
        {
          return this.DbSet.ToList();
        }

        public virtual Entity GetById(int id)
        {
            return this.DbSet.Find(id);
        }

        public virtual void Add(Entity entety)
        {
          this.DbSet.Add(entety);
        }

        public virtual void Remove(Entity entety)
        {
            this.DbSet.Remove(entety);
        }

        public virtual void Update(Entity entety)
        {
          this.DbSet.Update(entety);
        }

        public virtual void SaveChanged()
        {
            this.DbContext.SaveChanges();
        }
    }
}
