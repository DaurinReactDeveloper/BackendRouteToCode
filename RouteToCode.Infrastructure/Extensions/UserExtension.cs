using RouteToCode.Domain.Entities;
using RouteToCode.Infrastructure.Models;

namespace RouteToCode.Infrastructure.Extensions
{
    public static class UserExtension
    {
        //Los Metodos Deben ser Verbos

        public static UserModel UserModelConverter(this User userDomain)
        {

            UserModel userModel = new UserModel()
            {
                Name = userDomain.Name,
                Email = userDomain.Email,
                Address = userDomain.Address,
                Password = userDomain.Password,
                UserId = userDomain.UserId
            };

            return userModel;
        }

    }
}
