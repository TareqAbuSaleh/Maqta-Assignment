using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Service.User.Dto;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using ViewModel;
using ViewModel.Context;
using System.Linq;
using Mapster;
namespace Service.User
{
    public class UserService : IUserService
    {
        private readonly string _jwtKey;
        private readonly IConfiguration _config;
        private DataContext _context;
        public UserService(IConfiguration configuration, DataContext _context)
        {

            this._config = configuration;
            this._context = _context;

        }
        public async Task<AppResponse> AddUser(SignupUser input)
        {
            AppResponse appResponse = new AppResponse();
            try
            {
                Users user = new Users();
                user = input.Adapt<Users>();
                _context.Add(user);
                _context.SaveChanges();
                return appResponse;

            }
            catch (Exception ex)
            {
                appResponse.ErrorMessage = ex.InnerException?.Message ?? ex.Message;
                appResponse.Error = ex;
                return appResponse;
            }
        }

        public async Task<AppResponse<List<GetAllUsers>>> GetUsers()
        {
            AppResponse<List<GetAllUsers>> appResponse = new AppResponse<List<GetAllUsers>>();
            appResponse.Data = new List<GetAllUsers>();

            appResponse.Data = _context.Users.Select(a => new GetAllUsers { FirstName = a.FirstName, Id = a.Id, Username = a.Username }).ToList();
            return appResponse;
        }

        public async Task<AppResponse<LoginOutput>> Login(LoginInput input)
        {
            AppResponse<LoginOutput> appResponse = new AppResponse<LoginOutput>();
            appResponse.Data = new LoginOutput();
            Users user = _context.Users.Where(a => a.Username == input.Username && a.Password == input.Password).FirstOrDefault();
            if (user == null)
            {
                appResponse.ErrorMessage = "Invalid Credential";
                return appResponse;
            }

            appResponse.Data.Token = GenerateJWT(user);
            appResponse.Data.User = user;
            return appResponse;
        }

     
        private string GenerateJWT(Users userInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"],
              null,
              expires: DateTime.Now.AddDays(1),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}

