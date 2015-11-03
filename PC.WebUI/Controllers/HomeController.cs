using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PC.WebUI.Controllers
{
    public class HomeController : Controller
    {

        public ActionResult SinglePage()
        {
            return View();
        }
        public ActionResult Index()
        {
            return View();
        }
    }
}
