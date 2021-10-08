import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent {

    constructor(private route:Router) {}

    strength = 0;
    validations : boolean[] = [];
    email = '';
    password = '';
    isLogin = false;
    isLoggedIn = false;

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

    login() {
        if (this.email === "test@email.com" && this.password === "123") {
            this.isLoggedIn = true;
            this.route.navigate(['']);
        }
    }
}
