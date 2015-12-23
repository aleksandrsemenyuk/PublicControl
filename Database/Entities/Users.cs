using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBPublic_Control
{
    public class Users
    {
        public int Id { set; get; }
        public string name { set; get; }
        public string email { set; get; }
        public string password { set; get; }
        public string facebook_id { set; get; }
        public string google_id { set; get; }
        public virtual Roles Roles { set; get; }
        public virtual UserStatuses UserStatuses { set; get; }
        public string avatar_url { set; get; }
        public virtual Languages Languages { set; get; }
    }
}
