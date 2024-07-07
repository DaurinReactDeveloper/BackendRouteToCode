using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteToCode.Application.Services
{
    public interface ITokenServices
    {

        string GenerateToken(string username, string role);

    }
}
