import {customElement, bindable} from 'aurelia-framework';

@customElement('signin')
export class SignIn {
  @bindable title;

    speak(){
        alert(`Hello ${this.login} ${this.password}!`);
}
}