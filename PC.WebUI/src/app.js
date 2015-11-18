
export class App {    

  configureRouter(config, router) {
    config.title = 'Public Control';
    config.map([
      { route: ['', 'login'],    name: 'login',      moduleId: 'routes/login/login',                  nav: true, title: 'Login' },
      { route: 'signUp',         name: 'signUp',     moduleId: 'routes/login/sign_up/signUp',         nav: true, title: 'Sign Up' },
      { route:'viasocial',       name: 'viasocial',  moduleId: 'routes/login/via_social/viasocial',   nav: true, title: 'Social' },
      { route: 'about',          name: 'about',      moduleId: 'routes/about/about',                  nav: true, title: 'About' }
    ]);

    this.router = router;
  } 

  showhide()
  {
      $("#sidebar").toggle("slow");
  }
}