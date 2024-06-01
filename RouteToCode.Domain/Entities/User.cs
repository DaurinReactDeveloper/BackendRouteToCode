using System;
using System.Collections.Generic;

namespace RouteToCode.Domain.Entities
{
    public partial class User
    {
        public User()
        {
            Comments = new HashSet<Comment>();
        }

        public int UserId { get; set; }
        public string? Name { get; set; }
        public string? Address { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public string? Rol { get; set; }


        public virtual ICollection<Comment> Comments { get; set; }
    }
}
