using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RouteToCode.Application.Contract;
using RouteToCode.Application.Dtos.Comment;
using RouteToCode.Infrastructure.Interfaces;
using System;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RouteToCode.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentServices CommentServices;

        public CommentController(ICommentServices CommentServices)
        {
            this.CommentServices = CommentServices;
        }

        //GET api/<CommentController>/5
        [HttpGet("GetBySection/{section}")]
        public IActionResult GetBySection(string section)
        {

            var result = this.CommentServices.GetbySection(section);

            if (result is null)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        // GET api/<CommentController>/5
        [HttpGet("{id}")]
        public ActionResult GetById(int id) {
            
            var GetId = this.CommentServices.GetById(id);

                if (GetId is null)
                {
                    return BadRequest(GetId);
                }

            return Ok(GetId);

        }

        // post api/<commentcontroller>
        [HttpPost("Save")]
        public IActionResult Post([FromBody] CommentAddDto commentAddDto)
        {
            var CommentAdd = this.CommentServices.Save(commentAddDto);

            if(CommentAdd is null)
            {
                BadRequest(CommentAdd);
            }

            return Ok(CommentAdd);

        }

        // put api/<commentcontroller>/5
        [HttpPut("Update")]
        public ActionResult Put([FromBody] CommentUpdateDto commentUpdateDto)
        {

            var CommentUpdate = this.CommentServices.Update(commentUpdateDto);

            if (CommentUpdate is null)
            {
                BadRequest(CommentUpdate);
            }

            return Ok(CommentUpdate);
        }

        // delete api/<commentcontroller>/5
        [Authorize(Roles = "admin")]
        [HttpDelete("Remove")]
        public ActionResult Delete([FromBody] CommentRemoveDto removeDto)
        {
            var EntityRemove = this.CommentServices.Remove(removeDto);

            if (EntityRemove is null)
            {
                return BadRequest(EntityRemove);
            }

            return Ok(EntityRemove);
        }
    }
}
