using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteToCode.Domain.Repository
{
    public interface IBaseRepository<Entety> where Entety : class
    {
        List<Entety> GetEntities();
        Entety GetById(int id);
        void Add(Entety entety);
        void Remove(Entety entety);
        void Update(Entety entety);
        void SaveChanged();
    }
}
