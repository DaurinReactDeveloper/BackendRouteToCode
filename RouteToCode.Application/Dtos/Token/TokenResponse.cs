using RouteToCode.Application.Dtos.User;
using RouteToCode.Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteToCode.Application.Dtos.Token
{
    public class TokenResponse
    {
        public UserModel User { get; set; }
        public string Token { get; set; }


    }
}
