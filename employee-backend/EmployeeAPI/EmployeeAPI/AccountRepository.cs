using Microsoft.AspNetCore.Identity.Data;
using EmployeeAPI.Extensions;

namespace EmployeeAPI
{
    public class AccountRepository
    {
        private readonly JwtSettings _jwtSettings;
        public AccountRepository(JwtSettings jwtSettings)
        {
            _jwtSettings = jwtSettings;
        }
        public async Task<string> GetJWTToken(LoginRequest request, string UserType)
        {
            string? token = TokenService.GenerateToken(_jwtSettings, request);

            return await Task.FromResult(token);
        }

        public Task<string> LoginUser(LoginRequest request)
        {
            var token = string.Empty;
            if (request.Email == "anis" && request.Password == "Sa123")
            {
                token = TokenService.GenerateToken(_jwtSettings, request);
            }
            return Task.FromResult(token);
        }

        public Task<string> RefreshToken()
        {
            var token = TokenService.GenerateRefreshToken(_jwtSettings);
            return Task.FromResult(token);
        }
    }
}
