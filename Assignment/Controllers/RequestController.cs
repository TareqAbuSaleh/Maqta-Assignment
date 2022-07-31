using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Service.Request;
using Service.Request.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ViewModel;

namespace Assignment.Controllers
{
    [ApiController]
    [Route("api/request")]
    [Authorize]

    public class RequestController : ControllerBase
    {
        IRequestService requestService;


        public RequestController(IRequestService requestService)
        {
            this.requestService = requestService;
        }
        [Route("get-all-request")]
        [HttpGet]
        public async Task<AppResponse<List<GetAllRequests>>> GetAllRequest()
        {
            return await requestService.GetAllRequest();
        }

        [Route("add-request")]
        [HttpPost]
        public async Task<AppResponse> AddRequest([FromBody] AddRequest input)
        {
            return await requestService.AddRequest(input);
        } 
        
        [Route("get-by-id-request")]
        [HttpGet]
        public async Task<AppResponse<GetByIdRequestOutput>> GetByIdRequest(string id)
        {
            return await requestService.GetByIdRequest(id);
        } 
        [Route("update")]
        [HttpPost]
        public async Task<AppResponse> Update([FromBody] GetByIdRequestOutput input)
        {
            return await requestService.Update(input);
        } 
        [Route("delete")]
        [HttpGet]
        public async Task<AppResponse> Delete(string id)
        {
            return await requestService.Delete(id);
        }
    }
}
