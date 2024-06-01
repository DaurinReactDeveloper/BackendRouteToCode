using RouteToCode.Application.Dtos.Comment;
using RouteToCode.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteToCode.Application.Validations
{
    public static class CommentValidations
    {
        public static bool ValidationsComment(CommentDto commentDto)
        {
            //VER SI ESTA VACIO CUALQUIER CAMPO STRING
            if (string.IsNullOrEmpty(commentDto.Content) || string.IsNullOrWhiteSpace(commentDto.Content)
            || string.IsNullOrEmpty(commentDto.UserName) || string.IsNullOrWhiteSpace(commentDto.UserName))
            {
                return false;
            }

            //base de datos inserccion comentario
            if (commentDto.Content.Length <= 10 || commentDto.Content.Length >= 79)
            {
                return false;
            }

            //base de datos inserccion Section
            if (commentDto.Section.Length >= 24)
            {
                return false;
            }

            return true;
        }
    }
}
