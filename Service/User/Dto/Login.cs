using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;
using ViewModel;

namespace Service.User.Dto
{
    public class LoginInput
    {
        [JsonProperty("username", Required = Required.Always)]
        public string Username { get; set; }
        [JsonProperty("password", Required = Required.Always)]
        public string Password { get; set; }
    } 
    public class LoginOutput
    {
        public string Token { get; set; }
        public Users User { get; set; }
    }
}
