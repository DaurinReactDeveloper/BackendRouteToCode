using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteToCode.Infrastructure.Models
{
    public class CommentModel
    {
        public int CommentId { get; set; }
        public string? Content { get; set; }
        public DateTime? CreatedAdt { get; set; }
        public int? UserId { get; set; }
        public string? UserName { get; set; }
        public string? Section { get; set; }
        public virtual UserModel? User { get; set; }
    }
}
