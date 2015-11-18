import {customElement, bindable} from 'aurelia-framework';
//import {HttpClient} from 'aurelia-http-client';

@customElement('signin')
export class SignIn {
  @bindable title;

  //static inject = [HttpClient];
  //constructor(http){
  //    this.http = http;
  //}

  getSome()
  {
      //var res = this.http.get("api/Account/Some");
      return res;
  }
    
  speak(){
        alert(`Hello ${this.login} ${this.password}!`);
    }
}