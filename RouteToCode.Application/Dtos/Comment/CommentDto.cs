using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteToCode.Application.Dtos.Comment
{
    public abstract class CommentDto
    {
        public int CommentId { get; set; }
        public string? Content { get; set; }
        public DateTime? CreatedAdt { get; set; }
        public string? UserName { get; set; }
        public int? UserId { get; set; }
        public string? Section { get; set; }
    }
}
