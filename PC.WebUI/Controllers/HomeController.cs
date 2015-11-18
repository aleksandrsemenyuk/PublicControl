using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DataAccess;
using Database.Entities;

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

        //For testing
        private UnitOfWork unitOfWork = new UnitOfWork();
        private Repository<Entity> bookRepository;

        public HomeController()
        {
            bookRepository = unitOfWork.Repository<Entity>();
        }

        public ActionResult CreateEditBook(int? id)
        {
            Entity model = new Entity();
            if (id.HasValue)
            {
                model = bookRepository.GetById(id.Value);
            }
            return View(model);
        }

        [HttpPost]
        public ActionResult CreateEditBook(Entity model)
        {
            var editModel = bookRepository.GetById(model.Id);

            return View(model);
        }

        public ActionResult DeleteBook(int id)
        {
            Entity model = bookRepository.GetById(id);
            return View(model);
        }

        [HttpPost, ActionName("DeleteBook")]
        public ActionResult ConfirmDeleteBook(int id)
        {
            Entity model = bookRepository.GetById(id);
            bookRepository.Delete(model);
            return RedirectToAction("Index");
        }

        public ActionResult DetailBook(int id)
        {
            Entity model = bookRepository.GetById(id);
            return View(model);
        }

        protected override void Dispose(bool disposing)
        {
            unitOfWork.Dispose();
            base.Dispose(disposing);
        }
    }
}
