using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteToCode.Application.Core
{
    public interface IBaseCommentServices
    {
        ServiceResult GetbySection(string Section);
    }
}
