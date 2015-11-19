
import {Validation} from 'aurelia-validation';
import {ensure} from 'aurelia-validation';
import {inject} from 'aurelia-framework';
import {customElement, bindable} from 'aurelia-framework';
//import {HttpClient} from 'aurelia-http-client';

@customElement('signin')
//@inject(Validation)
//export class RegisterViewModel {
export class App {
    @bindable title;
    static inject() { return [Validation]; }

    //@ensure(function(it){ it.isNotEmpty().hasLengthBetween(3,10) })
    //login = '';

    //@ensure(function(it){ it.isNotEmpty().hasLengthBetween(3,10).isStrongPassword(4) })
    //  password = '';

    constructor(validation) {
        this.heading = 'Aurelia Login Validation !';
        this.login = 'login';
        this.password = '*****';

        //this.validation = validation.on(this);
        this.validation = validation.on(this)
                    .ensure('login')
                    .isNotEmpty()
                    .hasLengthBetween(3,10)
                    .ensure('password')
                    .isNotEmpty()
                    .hasLengthBetween(3,10)
                    .isStrongPassword(4);
    }

    register(){
        //check if the validation is valid before performing the register
        this.validation.validate().then( () => {
            alert('Welcome!'); //Your more meaningful stuff would go here

        var identity = { login : this.login, password:this.password };
        var jsonObj = JSON.stringify( identity );
			
        var html = "";
        for( var key in jsonObj ){
            //html += "<br> &nbsp; &nbsp; &nbsp; "+ 
            //    key +" = " + jsonObj[key] +
            //    " &nbsp; &nbsp; &nbsp;(" 
            //    + typeof( jsonObj[key] ) +")";
            html += jsonObj[key] ;
        }
        document.getElementsByTagName("p")[0].innerHTML = html;

    });
}

}