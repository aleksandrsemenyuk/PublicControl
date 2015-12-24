using System.Web.Http;
using PC.WebUI.Models;

namespace PC.WebUI.Controllers
{
    public class IssueController : ApiController
    {
        public void Add(IssueViewModel issue)
        {
            var issueEntity = issue;
        }
    }
}
