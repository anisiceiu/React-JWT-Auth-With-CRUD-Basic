

using EmployeeAPI.Models;

namespace EmployeeAPI.Models
{
    public class UserModel
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string UserName { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public bool Enabled { get; set; }
    }
}

public class UserLogInResult
{
    public string? Token { get; set; }
    public UserModel? User { get; set; }
}