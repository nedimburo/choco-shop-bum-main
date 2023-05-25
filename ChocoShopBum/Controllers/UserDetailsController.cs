using ChocoShopBum.Areas.Identity.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace ChocoShopBum.Controllers
{
    public class UserDetailsController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public UserDetailsController(UserManager<ApplicationUser> userManager)
        {
            this._userManager = userManager;
        }
        public IActionResult Index()
        {
            Task<ApplicationUser> user = _userManager.GetUserAsync(this.User);
            ViewData["Email"] = user.Result.Email;
            ViewData["FirstName"] = user.Result.FirstName;
            ViewData["LastName"] = user.Result.LastName;
            if (user.Result.Gender == 0)
            {
                ViewData["Gender"] = "Musko";
            }
            else
            {
                ViewData["Gender"] = "Zensko";
            }
            ViewData["RegDate"] = user.Result.CreatedDateTime.Day+"."+ user.Result.CreatedDateTime.Month+"."+user.Result.CreatedDateTime.Year;
            return View();
        }
    }
}
