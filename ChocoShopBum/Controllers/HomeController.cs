using ChocoShopBum.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace ChocoShopBum.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Narudzba()
        {
            if (User.Identity.IsAuthenticated){
                return View();
            }
            else {
                return Redirect("/Identity/Account/Login");
            }
        }

        public IActionResult Moreabout()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}