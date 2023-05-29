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

        // Za edit komentara
        public IActionResult Edit(int? id)
        {
            if(id==null || id == 0)
            {
                return NotFound();
            }
            var commentFromDb=_db.Comments.Find(id);

            if (commentFromDb == null)
            {
                return NotFound();
            }
            return View(commentFromDb);
        }

        // za post
        [HttpPost, ActionName("Edit")]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(Comment obj)
        {
            obj.UserID = _userManager.GetUserId(this.User);
            _db.Comments.Update(obj);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }

        // Za brisanje komentara
        public IActionResult Delete(int? id)
        {
            if (id == null || id == 0)
            {
                return NotFound();
            }
            var commentFromDb = _db.Comments.Find(id);

            if (commentFromDb == null)
            {
                return NotFound();
            }
            return View(commentFromDb);
        }

        // za post
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public IActionResult Delete(Comment obj)
        {            
            if(obj == null)
            {
                return NotFound();
            }
            _db.Comments.Remove(obj);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}
