
export class App {    

  configureRouter(config, router) {
    config.title = 'Public Control';
    config.map([
      { route: ['', 'login'],    name: 'login',      moduleId: 'routes/login/login',   nav: true, title: 'Login' },
      { route: 'about',          name: 'about',      moduleId: 'routes/about/about',   nav: true, title: 'About' }
    ]);

    this.router = router;
  }




//  attached() {
//              var mapProp = {
//                  center:new google.maps.LatLng(50.6143691,26.2632106),
//                  zoom:13
//          };
//          var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
//          google.maps.event.addDomListener(window, 'load', initialize);
//}

}