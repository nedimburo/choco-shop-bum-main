using ChocoShopBum.Areas.Identity.Data;
using ChocoShopBum.Data;
using ChocoShopBum.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;

namespace ChocoShopBum.Controllers
{
    public class RoleController : Controller
    {
        private readonly ApplicationDbContext _db;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public RoleController(ApplicationDbContext db, SignInManager<ApplicationUser> signInManager)
        {
            _db = db;
            _signInManager = signInManager;
        }

        [Authorize(Policy ="RequireAdmin")]
        public IActionResult Index()
        {
            IEnumerable<ApplicationUser> usersList = _db.Users;
            return View(usersList);
        }

        public async Task<IActionResult> Edit(string id)
        {
            var userFromDb=_db.Users.Find(id);
            IEnumerable<IdentityRole> rolesFromDb = _db.Roles;

            var userRoles = await _signInManager.UserManager.GetRolesAsync(userFromDb);

            var roleItems=rolesFromDb.Select(role =>
                new SelectListItem(
                    role.Name,
                    role.Id,
                    userRoles.Any(ur=>ur.Contains(role.Name)))).ToList();

            if (userFromDb == null)
            {
                return NotFound();
            }
            var vm = new EditUserViewModel
            {
                User = userFromDb,
                Roles= roleItems
            };
            return View(vm);
        }

        [HttpPost, ActionName("OnPostAsync")]
        public async Task<IActionResult> OnPostAsync(EditUserViewModel data)
        {
            var userFromDb = _db.Users.Find(data.User.Id);
            if (userFromDb == null)
            {
                return NotFound();
            }

            var userRolesInDb = await _signInManager.UserManager.GetRolesAsync(userFromDb);

            foreach (var role in data.Roles)
            {
                var assignedInDb = userRolesInDb.FirstOrDefault(ur => ur == role.Text);
                if (role.Selected)
                {
                    if (assignedInDb == null)
                    {
                        await _signInManager.UserManager.AddToRoleAsync(userFromDb, role.Text);
                    }
                }
                else
                {
                    if (assignedInDb != null)
                    {
                        await _signInManager.UserManager.RemoveFromRoleAsync(userFromDb, role.Text);
                    }
                }
            }

            userFromDb.FirstName=data.User.FirstName;
            userFromDb.LastName = data.User.LastName;
            userFromDb.Email=data.User.Email;
            userFromDb.Gender = data.User.Gender;

            _db.Update(userFromDb);
            _db.SaveChanges();

            return RedirectToAction("Index");
        }
    }
}
