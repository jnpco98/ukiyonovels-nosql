using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ukiyo.Handlers.Core.Component.Options
{
    public class SwaggerOptions
    {
        public string JsonRoute { get; set; }
        public string Description { get; set; }
        public string UIEndpoint { get; set; }
        public string RoutePrefix { get; set; }
    }
}
