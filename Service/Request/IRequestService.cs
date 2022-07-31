using Service.Request.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;
using ViewModel;

namespace Service.Request
{
    public interface IRequestService
    {
        public Task<AppResponse> AddRequest(AddRequest input);
        public Task<AppResponse<List<GetAllRequests>>> GetAllRequest();
        public Task<AppResponse<GetByIdRequestOutput>> GetByIdRequest( string input);
        public Task<AppResponse> Update(GetByIdRequestOutput input);
        public Task<AppResponse> Delete(string input);

    }
}
