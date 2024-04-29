using Microsoft.Extensions.Logging;
using RouteToCode.Domain.Entities;
using RouteToCode.Infrastructure.Core;
using RouteToCode.Infrastructure.Exceptions;
using RouteToCode.Infrastructure.Interfaces;
using RouteToCode.Infrastructure.Models;
using RouteToCode.Infrastructure.Extensions;


namespace RouteToCode.Infrastructure.Persistence.Repositories
{
    public class CommentRepository : BaseRepository<Comment>, ICommentRepository
    {
        private readonly ILogger<CommentRepository> logger;
        private readonly DBBLOGContext dbContext;

        public CommentRepository(ILogger<CommentRepository> logger,
            DBBLOGContext dbContext) : base(dbContext)
        {
            this.logger = logger;
            this.dbContext = dbContext;
        }

        public List<CommentModel> GetSectionComment(string Section)
        {

            List<CommentModel> CommentListSection = new List<CommentModel>();

            try
            {
                CommentListSection = (from cm in base.GetEntities()
                                      where cm.Section.Equals(Section)
                                      select new CommentModel()
                                      {
                                          CommentId = cm.CommentId,
                                          Content = cm.Content,
                                          UserId = cm.UserId,
                                          UserName = cm.UserName,
                                          CreatedAdt = cm.CreatedAdt
                                      }
                                      ).ToList();
            }

            catch (Exception ex)
            {
                this.logger.LogError($"Ha Ocurrido un Error obteniendo los Comentarios {ex.Message}", ex.ToString());
            }

            return CommentListSection;

        }

        public CommentModel GetComment(int CommentId)
        {
            CommentModel commentModel = new CommentModel();

            try
            {
                commentModel = base.GetById(CommentId).CommentModelConverter();
            }
            catch (Exception ex)
            {

                this.logger.LogError("Error obteniendo la venta", ex.ToString());
            }

            return commentModel;

        }
        
        public override void Add(Comment entety)
        {
            base.Add(entety);
            base.SaveChanged();
        }

        public override void Update(Comment entety)
        {
            try
            {

                Comment CommentToUpdate = base.GetById(entety.CommentId);

                if (CommentToUpdate is null)
                {
                    throw new CommentExceptions("El Comentario no Existe");
                }

                CommentToUpdate.UserId = entety.UserId;
                CommentToUpdate.CommentId = entety.CommentId;
                CommentToUpdate.UserName = entety.UserName;
                CommentToUpdate.Content = entety.Content;

                base.Update(CommentToUpdate);
                base.SaveChanged();
            }
            catch (Exception ex)
            {
                this.logger.LogError($"Ocurrió un error actualizando el comentario: {ex.Message}", ex.ToString());
            }
        }

        public override void Remove(Comment entety)
        {
            try
            {

                Comment CommentToRemove = base.GetById(entety.CommentId);

                if (CommentToRemove is null)
                    throw new CommentExceptions("El Comentario No Existe");

                base.Remove(CommentToRemove);
                base.SaveChanged();
            }

            catch (Exception ex)
            {
                this.logger.LogError($"Ocurrió un error Eliminando el comentario: {ex.Message}", ex.ToString());
            }
        }

    }
}
