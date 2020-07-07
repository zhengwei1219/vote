using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Zhengwei.Vote.Web.Startup))]
namespace Zhengwei.Vote.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
