using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteToCode.Infrastructure.Models
{
    public class UserModel
    {
        public UserModel()
        {
            Comments = new HashSet<CommentModel>();
        }

        public int UserId { get; set; }
        public string? Name { get; set; }
        public string? Address { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public string? Rol { get; set; }


        public virtual ICollection<CommentModel> Comments { get; set; }
    }
}
