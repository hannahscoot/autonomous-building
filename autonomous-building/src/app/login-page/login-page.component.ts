import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent {

    strength = 0;
    validations : boolean[] = [];
    password = '';
    isLogin = false;

    validatePassword() {
        this.validations = [
            (this.password.length > 5), 
            (this.password.search(/[A-Z]/) > -1), 
            (this.password.search(/[0-9]/) > -1), 
            (this.password.search(/[$&+,:;=?@#*]/) > -1) 
        ]
        this.strength = this.validations.reduce((acc, cur) => acc + Number(cur), 0)
    }

    newuser() {
        this.isLogin = !this.isLogin;
    }
}
