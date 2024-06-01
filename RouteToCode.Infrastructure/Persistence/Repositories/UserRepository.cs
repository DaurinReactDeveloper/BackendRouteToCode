using Microsoft.Extensions.Logging;
using RouteToCode.Domain.Entities;
using RouteToCode.Infrastructure.Core;
using RouteToCode.Infrastructure.Exceptions;
using RouteToCode.Infrastructure.Extensions;
using RouteToCode.Infrastructure.Interfaces;
using RouteToCode.Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteToCode.Infrastructure.Persistence.Repositories
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {

        private readonly DBBLOGContext dBBLOGContext;
        private readonly ILogger<UserRepository> logger;

        public UserRepository(ILogger<UserRepository> logger,
            DBBLOGContext DbContext) : base(DbContext)
        {
            this.logger = logger;
            this.dBBLOGContext = DbContext;
        }

        public UserModel GetUser(string name, string password)
        {
            try
            {
                var user = (from us in this.dBBLOGContext.Users
                            where us.Name == name && us.Password == password
                            select new UserModel
                            {
                                Name = us.Name,
                                Rol = us.Rol,
                                UserId = us.UserId
                                
                            }).FirstOrDefault();

                return user;
            }

            catch (Exception ex)
            {
                this.logger.LogError("Ha Ocurrido un Error Obteniendo el Usuario", ex);
                return null;
            }
        }

        public UserModel GetUserById(int Id)
        {

            UserModel user = new UserModel();

            try
            {

                user = this.GetById(Id).UserModelConverter();

            }
            catch (Exception ex)
            {

                this.logger.LogError("Error obteniendo el Usuario", ex.ToString());
            }

            return user;

        }

        public override void Add(User entety)
        {
            base.Add(entety);
            SaveChanged();
        }

        public override void Update(User entety)
        {

            try
            {

                User user = this.GetById(entety.UserId);

                if (user is null)
                {
                    throw new UserExceptions("Ha Ocurrido Un Error Obteniendo el id del Usuario");
                }

                user.Name = entety.Name;
                user.Password = entety.Password;
                user.Email = entety.Email;
                user.Address = entety.Address;

                base.Update(user);
                base.SaveChanged();

            }
            catch (Exception ex)
            {

                this.logger.LogError($"Ocurrió un error actualizando el usuario: {ex.Message}", ex.ToString());
            }



        }

        public override void Remove(User entety)
        {
            try
            {

                User user = this.GetById(entety.UserId);

                if (user is null)
                {

                    throw new UserExceptions("Ha Ocurrido Un Error Obteniendo el id del Usuario");
                }

                base.Remove(user);
                base.SaveChanged();

            }
            catch (Exception ex)
            {
                this.logger.LogError($"Ocurrió un error Eliminando el Usuario: {ex.Message}", ex.ToString());
            }
        }

    }
}
