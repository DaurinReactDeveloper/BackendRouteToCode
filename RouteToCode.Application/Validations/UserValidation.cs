using RouteToCode.Application.Dtos.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteToCode.Application.Validations
{
    public static class UserValidation
    {

        public static bool ValidationUserRegister(UserDto user)
        {

            //VER SI ESTA VACIO CUALQUIER CAMPO
            if (string.IsNullOrEmpty(user.Name) || string.IsNullOrWhiteSpace(user.Name)
                || string.IsNullOrEmpty(user.Password) || string.IsNullOrWhiteSpace(user.Password)
                || string.IsNullOrEmpty(user.Email) || string.IsNullOrWhiteSpace(user.Email)
                || string.IsNullOrEmpty(user.Address) || string.IsNullOrWhiteSpace(user.Address))
            {

                return false;

            }

            //LA LONGITUD DEBE SER MENOR A 12 DEL NAME Y EL PASSWORD
            if ((user.Name.Length > 11) || (user.Password.Length > 11))
            {
                return false;
            }

            //LA LONGITUD DEBE SER MENOR 40 DEL EMAIl
            if (user.Email.Length > 39)
            {
                return false;
            }

            //LA LONGITUD DEBE SER MENOR 25 DEL ADDRRES
            if (user.Address.Length > 24)
            {
                return false;
            }

            return true;
        }

        public static bool ValidationUserId(UserDto user)
        {

            //si el id es 0
            if (user.UserId <= 0)
            {
                return false;
            }

            return true;
        }

        public static bool ValidationUserId(int id)
        {

            //si el id es 0
            if (id <= 0)
            {
                return false;
            }

            return true;
        }

    }
}
