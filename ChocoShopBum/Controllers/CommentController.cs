using ChocoShopBum.Areas.Identity.Data;
using ChocoShopBum.Data;
using ChocoShopBum.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace ChocoShopBum.Controllers
{
    public class CommentController : Controller
    {
        private readonly ApplicationDbContext _db;
        private readonly UserManager<ApplicationUser> _userManager;

        public CommentController(ApplicationDbContext db, UserManager<ApplicationUser> userManager)
        {
            _db = db;
            _userManager = userManager;
        }

        public IActionResult Index()
        {
            IEnumerable<Comment> commentList = _db.Comments;
            return View(commentList);
        }

        public IActionResult Create()
        {
            if (User.Identity.IsAuthenticated)
            {
                return View();
            }
            else
            {
                return Redirect("/Identity/Account/Login");
            }
        }

        // za post
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(Comment obj)
        {
            obj.UserID = _userManager.GetUserId(this.User);
            _db.Comments.Add(obj);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}
