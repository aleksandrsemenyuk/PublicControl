using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBPublic_Control
{
    public class Attachments
    {
        public int Id { set; get; }
        public string name { set; get; }
        public virtual Issues Issues { set; get; }
    }
}
