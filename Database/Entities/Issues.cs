using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBPublic_Control
{
    public class Issues
    {
        public int Id { set; get; }
        public string name { set; get; }
        public string description { set; get; }
        public string map_pointer { set; get; }
        public virtual IssuesCategory IssuesCategory { set; get; }
        public int severity { set; get; }
    }
}
