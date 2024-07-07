using RouteToCode.Application.Core;
using RouteToCode.Application.Dtos.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteToCode.Application.Contract
{
    public interface IUserServices :  IBaseServices<UserAddDto, UserRemoveDto,UserUpdateDto>, IBaseUserServices
    {
    }
}
