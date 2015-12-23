import {customElement, bindable, inject} from 'aurelia-framework';
import {Validation, ensure} from 'aurelia-validation';
import {HttpClient} from 'aurelia-fetch-client';

@customElement('signup')
@inject(HttpClient, Validation)
export class SignUp {
    @bindable title;
    
    constructor(http, validation) {
        this.login = '';
        this.password = '';
        this.name = '';
        
        this.validation = validation.on(this)
                    .ensure('login')
                    .isNotEmpty()
                    .isEmail()
                    .ensure('password')
                    .isNotEmpty()
                    .hasLengthBetween(4,16)
                    .isStrongPassword(3)
                    .ensure('name')
                    .isNotEmpty()
                    .hasLengthBetween(2,40)
                    .matches(/^[A-ZА-ЯІЇЄ][a-zа-яіїє]+([ -][A-ZА-ЯІЇЄ][a-zа-яіїє]+)?$/)
                    .withMessage('must begin from Uppercase letter and contains one or two words separated " " or "-"');
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
        //document.getElementsByTagName("p")[0].innerHTML = html;

    });
}

}