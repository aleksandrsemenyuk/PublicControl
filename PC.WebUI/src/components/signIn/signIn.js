import {customElement, bindable, inject} from 'aurelia-framework';
import {Validation, ensure} from 'aurelia-validation';
import {HttpClient} from 'aurelia-fetch-client';

@customElement('signin')
@inject(HttpClient, Validation)
export class SignIn {
    @bindable title;
    
    constructor(http, validation) {
        this.login = '';
        this.password = '';
        
        this.validation = validation.on(this)
                    .ensure('login')
                    .isNotEmpty()
                    .isEmail()
                    .ensure('password')
                    .isNotEmpty();        
    }

    register(){
        this.validation.validate().then( () => {
            alert('Welcome!');

        var identity = { login : this.login, password:this.password };
        var jsonObj = JSON.stringify( identity );
			
        var html = "";
        for( var key in jsonObj ){
            html += jsonObj[key] ;
        }
        document.getElementsByTagName("p")[0].innerHTML = html;

    });
}

}