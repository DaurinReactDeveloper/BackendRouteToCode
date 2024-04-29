using Microsoft.Extensions.Logging;
using RouteToCode.Application.Contract;
using RouteToCode.Application.Core;
using RouteToCode.Application.Dtos.Comment;
using RouteToCode.Infrastructure.Interfaces;
using RouteToCode.Domain.Entities;

namespace RouteToCode.Application.Services
{
    public class CommentService : ICommentServices
    {
        //Inyeccion de Dependencias del Repositorio y el Illoger

        private readonly ICommentRepository commentRepository;
        private readonly ILogger<CommentService> logger;

        public CommentService(ICommentRepository commentRepository, ILogger<CommentService> logger)
        {
            this.commentRepository = commentRepository;
            this.logger = logger;
        }

        public ServiceResult GetbySection(string Section)
        {
            ServiceResult result = new ServiceResult();

            try
            {
                var comment = this.commentRepository.GetSectionComment(Section);
                result.Data = comment;
            }
            catch (Exception ex)
            {
                result.Success = false;
                result.Message = "Ha Ocurrido un Error Obteniendo el Comentario";
                this.logger.LogError($"{result.Message}", ex.ToString());

            }
            return result;
        }

        public ServiceResult GetById(int id)
        {

            ServiceResult result = new ServiceResult();

            try
            {
                var GetId = this.commentRepository.GetComment(id);
                result.Data = GetId;
            }
            catch (Exception ex)
            {
                result.Success = false;
                result.Message = "Ha Ocurrido un Error Obteniendo el Comentario";
                this.logger.LogError($"{result.Message}", ex.ToString());
            }

            return result;
        }

        public ServiceResult Save(CommentAddDto ModelDto)
        {
            ServiceResult result = new ServiceResult();

            try
            {
                this.commentRepository.Add(new Comment()
                {
                    Content = ModelDto.Content,
                    Section = ModelDto.Section,
                    UserName = ModelDto.UserName,
                });

                result.Message = "Comentario Agregado Correctamente";
            }
            catch (Exception ex)
            {
                result.Success = false;
                result.Message = "Error guardando el Comentario";
                this.logger.LogError($"{result.Message}", ex.ToString());
            }

            return result;
        }

        public ServiceResult Remove(CommentRemoveDto ModelDto)
        {
            ServiceResult result = new ServiceResult();

            try
            {
                var CommentRemove = this.commentRepository.GetById(ModelDto.CommentId);

                if (CommentRemove is null)
                {
                    result.Success = false;
                    result.Message = "Error Obteniendo el IdComment del Comentario";
                    return result;
                }

                this.commentRepository.Remove(CommentRemove);
                this.commentRepository.SaveChanged();
                result.Message = "Comentario Eliminado Correctamente";

            }
            catch (Exception ex)
            {
                result.Success = false;
                result.Message = "Error al eliminar el comentario";
                this.logger.LogError($"{result.Message}", ex.ToString());
            }

            return result;
        }

        public ServiceResult Update(CommentUpdateDto ModelDto)
        {
            ServiceResult result = new ServiceResult();

            try
            {

                var CommentUpdate = this.commentRepository.GetById(ModelDto.CommentId);

                if (CommentUpdate is null)
                {
                    result.Success = false;
                    result.Message = "Error Obteniendo el IdComment del Comentario";
                    return result;
                }

                CommentUpdate.Content = ModelDto.Content;
                CommentUpdate.Section = ModelDto.Section;
                CommentUpdate.UserName = ModelDto.UserName;

                this.commentRepository.SaveChanged();

                result.Message = "Comentario actualizado correctamente.";

            }
            catch (Exception ex)
            {
                result.Success = false;
                result.Message = "Error al actualizar el Comentario";
                this.logger.LogError($"{result.Message}", ex.ToString());
            }
            return result;
        }

    }
}
