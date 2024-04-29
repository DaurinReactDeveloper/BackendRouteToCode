using Microsoft.EntityFrameworkCore;
using RouteToCode.Application.Contract;
using RouteToCode.Application.Services;
using RouteToCode.Domain.Entities;
using RouteToCode.Infrastructure.Interfaces;
using RouteToCode.Infrastructure.Persistence.Repositories;
using RouteToCode.loc.Dependencies;

namespace RouteToCode.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            //Dependencies Loc
            builder.Services.AddCommentDependency();
            builder.Services.AddUserDependency();

            //Registro de dependencia base de de datos //
            builder.Services.AddDbContext<DBBLOGContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DBBLOGContext")));



            //Configurar Core para hacer las Peticiones desde ReactJs
            var proveedor = builder.Services.BuildServiceProvider();

            var configuration = proveedor.GetRequiredService<IConfiguration>();

            builder.Services.AddCors(options =>
            {

                var FrontendUrl = configuration.GetValue<string>("FrontendUrl");

                //Politics para poder utilizar los metodos basicos(AllowAnyMethod)
                options.AddDefaultPolicy(builder =>
                {
                    builder.WithOrigins(FrontendUrl).AllowAnyMethod().AllowAnyHeader();
                });


            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseCors();

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}