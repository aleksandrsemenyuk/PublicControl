using PC.WebUI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PC.WebUI.Controllers
{
    public class AccountController : ApiController
    {
        public bool Some()
        {
            return true;
        }

        public bool Login(LoginModel model)
        {
            return true;
        }

        public bool SignUp(SignUpModel model)
        {
            return true;
        }

        public bool SignInSocial(SocialModel model)
        {
            return true;
        }

        public bool LogOff()
        {
            return true;
        }
    }
}
