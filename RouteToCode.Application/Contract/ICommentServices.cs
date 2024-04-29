using RouteToCode.Application.Core;
using RouteToCode.Application.Dtos.Comment;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteToCode.Application.Contract
{
    public interface ICommentServices: IBaseServices<CommentAddDto,CommentRemoveDto,CommentUpdateDto> , IBaseCommentServices
    {

    }
}
