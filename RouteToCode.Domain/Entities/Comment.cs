using System;
using System.Collections.Generic;

namespace RouteToCode.Domain.Entities
{
    public partial class Comment
    {
        public int CommentId { get; set; }
        public string? Content { get; set; }
        public DateTime? CreatedAdt { get; set; }
        public int? UserId { get; set; }
        public string? UserName { get; set; }

        public virtual User? User { get; set; }
    }
}
