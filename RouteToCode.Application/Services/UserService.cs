using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using RouteToCode.Application.Contract;
using RouteToCode.Application.Core;
using RouteToCode.Application.Dtos.User;
using RouteToCode.Application.Validations;
using RouteToCode.Domain.Entities;
using RouteToCode.Infrastructure.Interfaces;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace RouteToCode.Application.Services
{
    public class UserService : IUserServices
    {

        private readonly IUserRepository userRepository;
        private readonly ILogger<UserService> logger;
        private readonly IConfiguration _configuration;

        public UserService(IUserRepository userRepository, ILogger<UserService> logger, IConfiguration configuration)
        {
            this.userRepository = userRepository;
            this.logger = logger;
            this._configuration = configuration;
        }

        public ServiceResult GetById(int id)
        {

            ServiceResult result = new ServiceResult();

            try
            {

                var GetById = this.userRepository.GetUserById(id);

                if (UserValidation.ValidationUserId(id) || GetById == null)
                {
                    result.Success = false;
                    result.Message = "Usuario no encontrado";
                    return result;
                }

                result.Data = GetById;
            }

            catch (Exception ex)
            {
                result.Success = false;
                result.Message = "Ha Ocurrido un Error Obteniendo el Usuario";
                this.logger.LogError($"{result.Message}", ex.ToString());
            }

            return result;
        }

        public ServiceResult GetUser(string Name, string Password)
        {

            ServiceResult result = new ServiceResult();

            try
            {
                var user = this.userRepository.GetUser(Name, Password);

                if (user != null)
                {
                    result.Data = user;
                    result.Success = true;
                    return result;
                }

                result.Success = false;

            }
            catch (Exception ex)
            {
                result.Success = false;
                result.Message = "Ha Ocurrido un Error Obteniendo el Usuario";
                this.logger.LogError($"Ha Ocurrido un error {ex.Message}", ex.ToString());
            }

            return result;
        }

        public ServiceResult Save(UserAddDto ModelDto)
        {
            ServiceResult result = new ServiceResult();

            try
            {

                if (!UserValidation.ValidationUserRegister(ModelDto))
                {

                    result.Success = false;
                    result.Message = "Los datos del usuario no cumplen con las validaciones";
                    return result;
                }

                this.userRepository.Add(new User()
                {

                    Name = ModelDto.Name,
                    Password = ModelDto.Password,
                    Email = ModelDto.Email,
                    Address = ModelDto.Address,

                });

                result.Message = "Usuario Agregado Correctamente";
                this.userRepository.SaveChanged();
            }

            catch (Exception ex)
            {
                result.Success = false;
                result.Message = "Error guardando el Usuario";
                this.logger.LogError($"{result.Message}", ex.ToString());
            }

            return result;
        }

        public ServiceResult Update(UserUpdateDto ModelDto)
        {
            ServiceResult result = new ServiceResult();

            if (!UserValidation.ValidationUserRegister(ModelDto))
            {
                result.Success = false;
                result.Message = "Los datos del usuario no cumplen con las validaciones";
                return result;
            }

            try
            {
                var user = this.userRepository.GetById(ModelDto.UserId);

                if (user is null)
                {
                    result.Success = false;
                    result.Message = "Error Obteniendo el IdComment del Comentario";
                    return result;
                }

                user.Name = ModelDto.Name;
                user.Password = ModelDto.Password;
                user.Address = ModelDto.Address;
                user.Email = ModelDto.Email;

                this.userRepository.SaveChanged();

                result.Message = "Usuario actualizado correctamente.";

            }

            catch (Exception ex)
            {
                result.Success = false;
                result.Message = "Error al actualizar el Usuario";
                this.logger.LogError($"{result.Message}", ex.ToString());
            }

            return result;

        }

        public ServiceResult Remove(UserRemoveDto ModelDto)
        {
            ServiceResult result = new ServiceResult();

            if (UserValidation.ValidationUserId(ModelDto))
            {
                result.Success = false;
                result.Message = "Los datos del usuario no cumplen con las validaciones";
                return result;
            }


            try
            {
                var UserRemove = this.userRepository.GetById(ModelDto.UserId);

                if (UserRemove is null)
                {
                    result.Success = false;
                    result.Message = "Error Obteniendo el IdUser del Usuario";
                    return result;
                }

                this.userRepository.Remove(UserRemove);
                this.userRepository.SaveChanged();
                result.Message = "Se ha Elimidano Correctamente el Usuario";
            }

            catch (Exception ex)
            {
                result.Success = false;
                result.Message = "Error al eliminar el Usuario";
                this.logger.LogError($"{result.Message}", ex.ToString());
            }

            return result;
        }

        public string GenerateToken(string username, string role)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>
        {
            new Claim(JwtRegisteredClaimNames.Sub, username),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            new Claim(ClaimTypes.Role, role)
        };

            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

    }
}