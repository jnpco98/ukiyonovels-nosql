using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Web.Http.ModelBinding;
using Ukiyo.Handlers.Core.Component.Options;
using Ukiyo.Models.Components;
using Ukiyo.Repositories;

namespace Ukiyo.Handlers.Core.Component
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped(typeof(IEntityRepository<Novel>), typeof(NovelRepository));
            services.AddScoped(typeof(IEntityRepository<Book>), typeof(BookRepository));
            services.AddScoped(typeof(IEntityRepository<Chapter>), typeof(ChapterRepository));
            services.AddScoped(typeof(IEntityRepository<Review>), typeof(ReviewRepository));
            services.AddScoped(typeof(IEntityRepository<Comment>), typeof(CommentRepository));

            services.AddControllers().AddNewtonsoftJson();

            services.AddSwaggerGen(swagger =>
            {
                swagger.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "Ukiyo API", Version = "v1" });
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            if (!env.IsProduction())
            {
                var swaggerOptions = new SwaggerOptions();
                Configuration.GetSection(nameof(SwaggerOptions)).Bind(swaggerOptions);

                app.UseStaticFiles();

                app.UseSwagger(option => option.RouteTemplate = swaggerOptions.JsonRoute);

                app.UseSwaggerUI(option =>
                {
                    option.SwaggerEndpoint(swaggerOptions.UIEndpoint, swaggerOptions.Description);
                    option.RoutePrefix = swaggerOptions.RoutePrefix;
                });
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}