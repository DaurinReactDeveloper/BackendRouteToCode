using RouteToCode.Application.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteToCode.Application.Core
{
    public interface IBaseUserServices : ITokenServices
    {
        ServiceResult GetUser(string Name,string Password);
    }
}
