using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using RouteToCode.Domain.Entities;
using RouteToCode.loc.Dependencies;
using System.Text;

namespace RouteToCode.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            // Dependencies Loc
            builder.Services.AddCommentDependency();
            builder.Services.AddUserDependency();

            // Registro de dependencia base de datos
            builder.Services.AddDbContext<DBBLOGContext>(options =>
                options.UseMySql(builder.Configuration.GetConnectionString("DBBLOGContext"), new MySqlServerVersion(new Version(8, 0, 23))));

            // Configurar CORS para hacer las peticiones desde el frontend
            var frontendUrl = builder.Configuration.GetValue<string>("FrontendUrl");

            if (string.IsNullOrEmpty(frontendUrl))
            {
                throw new ArgumentNullException("FrontendUrl", "El valor de FrontendUrl no puede ser nulo o vacío.");
            }

            builder.Services.AddCors(options =>
            {
                options.AddDefaultPolicy(policy =>
                {
                    policy.WithOrigins(frontendUrl)
                          .AllowAnyMethod()
                          .AllowAnyHeader()
                          .AllowCredentials();
                });
            });

            // Configuración del Json Web Token
            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = builder.Configuration["Jwt:Issuer"],
                    ValidAudience = builder.Configuration["Jwt:Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
                };
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            else
            {
                // Habilita Swagger para producción si es necesario
                app.UseSwagger();
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
                    c.RoutePrefix = string.Empty;  // hace que Swagger UI esté disponible en la raíz
                });
            }

            app.UseHttpsRedirection();

            app.UseCors();

            app.UseAuthentication();

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
