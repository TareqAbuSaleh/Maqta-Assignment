using System;
using System.Collections.Generic;
using System.Text;

namespace Service.Request.Dto
{
   public class GetAllRequests
    {
        public string Id { get; set; }
        public string Request { get; set; }
        public long Quantity { get; set; }
        public string Notes { get; set; }
    }
}
