using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteToCode.Application.Core
{
    public class ServiceResult
    {

        public bool Success { get; set; }
        public string Message { get; set; }
        public dynamic Data { get; set; }

        public ServiceResult()
        {
            this.Success = true;
        }

    }
}
