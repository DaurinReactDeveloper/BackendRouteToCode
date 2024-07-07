using RouteToCode.Domain.Entities;
using RouteToCode.Domain.Repository;
using RouteToCode.Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteToCode.Infrastructure.Interfaces
{
    public interface ICommentRepository : IBaseRepository<Comment>
    {
        List<CommentModel> GetSectionComment(string Section);
        CommentModel GetComment(int CommentId);
    }
}
