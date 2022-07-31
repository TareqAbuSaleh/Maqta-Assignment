using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Request.Dto
{
    public class GetByIdRequestInput
    {
        public string Id { get; set; }

    }

    public class GetByIdRequestOutput
    {
        public string Id { get; set; }
        public string Request { get; set; }
        public long Quantity { get; set; }
        public string Notes { get; set; }
    }
}
