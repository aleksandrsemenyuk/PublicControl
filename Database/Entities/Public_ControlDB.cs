using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace DBPublic_Control
{
    public class Public_ControlDB : DbContext
    {
        public DbSet<Attachments> Attachments { set; get; }
        public DbSet<History> History { set; get; }
        public DbSet<Issues> Issues { set; get; }
        public DbSet<IssuesCategory> IssuesCategory { set; get; }
        public DbSet<IssueStatus> IssueStatus { set; get; }
        public DbSet<Languages> Languages { set; get; }
        public DbSet<Roles> Roles { set; get; }
        public DbSet<Users> Users { set; get; }
        public DbSet<UserStatuses> UserStatuses { set; get; }
    }
}
