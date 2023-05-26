using ChocoShopBum.Areas.Identity.Data;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ChocoShopBum.Models
{
    public class Comment
    {
        [Key]
        public int CommentID { get; set; }
        public string UserID { get; set; }
        public string Content { get; set; }
        public DateTime CreatedDateTime { get; set; } = DateTime.Now;

        [ForeignKey("UserID")]
        public virtual ApplicationUser User { get; set; }
    }
}
