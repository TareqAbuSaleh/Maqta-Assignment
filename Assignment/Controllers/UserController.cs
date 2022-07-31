using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Service.User;
using Service.User.Dto;
using System.Threading.Tasks;
using ViewModel;

namespace Assignment.Controllers
{
    [Route("api/user")]
    public class UserController : ControllerBase
    {
        IUserService userService;
        public UserController(IUserService userService)
        {
            this.userService = userService;
        }
        [Route("login")]
        [HttpPost]
        public async Task<AppResponse<LoginOutput>> Login([FromBody] LoginInput input)
        {
            return await userService.Login(input);

        } 
        [Route("add-user")]
        [HttpPost]
        public async Task<AppResponse> AddUser([FromBody] SignupUser input)
        {
           return  await userService.AddUser(input);
        }
    }
}
