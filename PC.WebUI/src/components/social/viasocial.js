
import 'bootstrap';
import {HttpClient} from 'aurelia-http-client';
import {customElement, bindable} from 'aurelia-framework';

@customElement('viasocial')
export class SocialLogIn {

    @bindable title;

    loginFacebook(){
        hello.init({
            facebook: '1619712604958412'
        });
        var tock = "";
        hello('facebook').login(/*{force:true}*/).then(function(response) {
            tock = response.authResponse.access_token;
            console.log('You are signed in to Facebook');
            hello('facebook').api('me').then(function(json) {
                console.log('Your name is ' + json.name);
            }, function(e) {
                alert('Whoops! ' + e.error.message);
            });
            var http = new HttpClient().configure(x => {
                x.withBaseUrl('http://localhost:9438/');
        });
        http.get("/api/Data/GetTockenFacebook?tocken="+tock);
    }, function(e) {
        console.log('Signin error: ' + e.error.message);
    });

}

logoutFacebook(){
    hello('facebook').logout(/*{force:false}*/).then(function(response) {
        console.log('You are signout from to Facebook');
    }, function(e) {
        console.log('Signout error: ' + e.error.message);
    });
}

loginGoogle(){
    hello.init({
        google: '414369662952-6o35uukgbf59k8irnld49ke5v00c0avb.apps.googleusercontent.com'
    },{
        redirect_uri:'http://localhost:9438/'
    }); 
    
    var tock = "";
    hello('google').login(/*{force:true}*/).then(function(response) {
        tock = response.authResponse.access_token;
        console.log('You are signed in to Google');
        console.log(tock);
        hello('google').api('me').then(function(json) {
            console.log('Your name is ' + json.name);
        }, function(e) {
            alert('Whoops! ' + e.error.message);
        });
        var http = new HttpClient().configure(x => {
            x.withBaseUrl('');
    });
    http.get("/api/Data/GetTockenGoogle?tocken="+tock);
    /*http.get("/api/Data/GetTockenGoogle");*/
}, function(e) {
    console.log('Signin error: ' + e.error.message);
});
}

logoutGoogle(){
    hello('google').logout(/*{force:false}*/).then(function(response) {
        console.log('You are signout from to Google');
    }, function(e) {
        console.log('Signout error: ' + e.error.message);
    });
}



    

}