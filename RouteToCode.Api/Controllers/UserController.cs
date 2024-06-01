using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NuGet.Common;
using RouteToCode.Application.Contract;
using RouteToCode.Application.Dtos.Token;
using RouteToCode.Application.Dtos.User;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RouteToCode.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly IUserServices userServices;

        public UserController(IUserServices userServices)
        {

            this.userServices = userServices;

        }

        // GET: api/<UserController>
        [HttpGet("{name}/{password}")]
        public ActionResult Get(string name, string password)
        {
            var user = this.userServices.GetUser(name, password);

            if (user is null)
            {
                return BadRequest("Usuario no encontrado");
            }
            else
            {
                var userData = user.Data;
                var token = this.userServices.GenerateToken(userData.Name, userData.Rol);

                return Ok(new
                {
                    User = userData,
                    Token = token
                });
            }
        }

        // GET api/<UserController>/5
        [Authorize(Roles = "admin")]
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {

            var GetById = this.userServices.GetById(id);

            if (GetById is null)
            {

                return BadRequest(GetById);

            }

            return Ok(GetById);
        }

        // POST api/<UserController>
        [HttpPost("Save")]
        public ActionResult Post([FromBody] UserAddDto userAddDto)
        {

            var user = this.userServices.Save(userAddDto);

            if (user is null || user.Success == false)
            {
                return BadRequest(user.Message);
            }

            return Ok();

        }

        // PUT api/<UserController>/5
        [HttpPut("Update")]
        public ActionResult Put([FromBody] UserUpdateDto userUpdateDto)
        {

            var userUpdate = this.userServices.Update(userUpdateDto);

            if (userUpdate is null)
            {

                return BadRequest(userUpdate);

            }

            return Ok(userUpdate);

        }

        // DELETE api/<UserController>/5
        [Authorize(Roles = "admin")]
        [HttpDelete("Remove")]
        public ActionResult Delete([FromBody] UserRemoveDto userRemoveDto)
        {

            var UserDelete = this.userServices.Remove(userRemoveDto);

            if (UserDelete is null)
            {
                BadRequest(userRemoveDto);
            }

            return Ok(UserDelete);

        }
    }
}
