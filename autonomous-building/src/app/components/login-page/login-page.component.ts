import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { AppUser } from 'src/app/models/AppUser';
import { UserAuth } from 'src/app/models/UserAuth';

import { SecurityService } from 'src/app/services/Security.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent {

    constructor(private route:Router, private securityService: SecurityService) {}

    strength = 0;
    validations : boolean[] = [];
    isLogin = false;
    isLoggedIn = false;

    user: AppUser = new AppUser();
    securityObject: UserAuth | undefined;

    validatePassword() {
        this.validations = [
            (this.user.password.length > 5), 
            (this.user.password.search(/[A-Z]/) > -1), 
            (this.user.password.search(/[0-9]/) > -1), 
            (this.user.password.search(/[$&+,:;=?@#*]/) > -1) 
        ]
        this.strength = this.validations.reduce((acc, cur) => acc + Number(cur), 0)
    }

    newuser() {
        this.isLogin = !this.isLogin;
    }

    login() {
        this.securityService.login(this.user).subscribe(resp => {
            this.securityObject = resp;
            console.log(this.securityObject);
            if (this.securityObject.isAuthenticated === true) {
                this.route.navigate(['']);
            }
        });        
    }
}
