using Microsoft.Extensions.Logging;
using RouteToCode.Application.Contract;
using RouteToCode.Application.Core;
using RouteToCode.Application.Dtos.User;
using RouteToCode.Domain.Entities;
using RouteToCode.Infrastructure.Interfaces;
using RouteToCode.Infrastructure.Persistence.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteToCode.Application.Services
{
    public class UserService : IUserServices
    {

        private readonly IUserRepository userRepository;
        private readonly ILogger<UserService> logger;

        public UserService(IUserRepository userRepository, ILogger<UserService> logger)
        {
            this.userRepository = userRepository;
            this.logger = logger;
        }

        public ServiceResult GetById(int id)
        {

            ServiceResult result = new ServiceResult();

            try
            {

                var GetById = this.userRepository.GetUserById(id);
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
                result.Data = user;

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

    }
}
