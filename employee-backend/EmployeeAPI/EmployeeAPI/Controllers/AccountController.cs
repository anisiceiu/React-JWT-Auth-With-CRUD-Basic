using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Logging;
using EmployeeAPI.Models;
using Microsoft.AspNetCore.Identity;

namespace EmployeeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        AccountRepository _accountRepository;
        public AccountController(AccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
        }

        [HttpPost("Login")]
        [AllowAnonymous]
        public async Task<UserLogInResult> Login(LoginRequest request)
        {
            UserLogInResult result =new UserLogInResult();
            LoginRequest logReq = new LoginRequest() { Email = request.Email, Password=request.Password};
            var token = await _accountRepository.GetJWTToken(logReq,"A");
            if (!string.IsNullOrEmpty(token))
            {
                var user = new UserModel { Enabled = true, Id=1, Name="Anisuzzaman", UserName="anis" };
                result.Token = token;
                result.User = user;

            }
            return result;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            //if (!ModelState.IsValid)
            //    return BadRequest(ModelState);

                return Ok(new { message = "User registered successfully!" });
        }
    }
}
