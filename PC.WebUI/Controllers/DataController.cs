using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PC.WebUI.Controllers
{
    public class DataController : ApiController
    {
        [HttpGet]
        public string GetTockenFacebook(string tocken)
        {
            return "{id:1}";
        }

        [HttpGet]
        public string GetTockenGoogle(string tocken)
        {
            return "{id:1}";
        }
    }
}
