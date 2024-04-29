using RouteToCode.Domain.Entities;
using RouteToCode.Infrastructure.Models;


namespace RouteToCode.Infrastructure.Extensions
{
    public static class CommentExtension
    {

        public static CommentModel CommentModelConverter(this Comment CommentDomain)
        {

            CommentModel commentModel = new CommentModel()
            {
                UserName = CommentDomain.UserName,
                UserId = CommentDomain.UserId,
                Content = CommentDomain.Content,
                CreatedAdt = CommentDomain.CreatedAdt,
                Section = CommentDomain.Section,
            };

            return commentModel;
        }

    }
}
