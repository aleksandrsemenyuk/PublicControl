using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBPublic_Control
{
    public class History
    {
        public int Id { set; get; }
        public virtual Users Users { set; get; }
        public virtual Issues Issues { set; get; }
        public virtual IssueStatus IssueStatus { set; get; }
        public DateTime date;
    }
}
