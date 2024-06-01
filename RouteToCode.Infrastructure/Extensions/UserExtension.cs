using RouteToCode.Domain.Entities;
using RouteToCode.Infrastructure.Models;

namespace RouteToCode.Infrastructure.Extensions
{
    public static class UserExtension
    {
        public static UserModel UserModelConverter(this User userDomain)
        {

            UserModel userModel = new UserModel()
            {
                Name = userDomain.Name,
                Email = userDomain.Email,
                Address = userDomain.Address,
                Password = userDomain.Password,
                UserId = userDomain.UserId,
                Rol  = userDomain.Rol,
            };

            return userModel;
        }

    }
}
