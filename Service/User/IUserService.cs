using Service.User.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ViewModel;

namespace Service.User
{
   public interface IUserService
    {
        public Task<AppResponse> AddUser(SignupUser input);
        public Task<AppResponse<List<GetAllUsers>>> GetUsers();
        public Task<AppResponse<LoginOutput>> Login(LoginInput input);
    }
}
