using System;
using System.Collections.Generic;
using System.Text;

namespace Service.Request.Dto
{
    public class AddRequest
    {
        public string Request { get; set; }
        public long Quantity { get; set; }
        public string Notes { get; set; }

    }
}
