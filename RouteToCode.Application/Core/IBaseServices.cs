using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteToCode.Application.Core
{
    public interface IBaseServices<DtoAdd,DtoRemove,DtoUpdate>
    {
        ServiceResult GetById(int id);
        ServiceResult Save(DtoAdd ModelDto);
        ServiceResult Remove(DtoRemove ModelDto);
        ServiceResult Update(DtoUpdate ModelDto);
    }
}
