using Microsoft.Extensions.DependencyInjection;
using RouteToCode.Application.Contract;
using RouteToCode.Application.Services;
using RouteToCode.Infrastructure.Interfaces;
using RouteToCode.Infrastructure.Persistence.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteToCode.loc.Dependencies
{
    public static class CommentDependencies
    {
            public static void AddCommentDependency(this IServiceCollection services)
            {
                services.AddScoped<ICommentRepository, CommentRepository>();
                services.AddTransient<ICommentServices, CommentService>();
            }
    }
}
