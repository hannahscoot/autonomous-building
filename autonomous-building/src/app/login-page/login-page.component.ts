import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent {

    strength = 0;
    validations : boolean[] = [];
    password = '';

    validatePassword() {
        this.validations = [
            (this.password.length > 5), 
            (this.password.search(/[A-Z]/) > -1), 
            (this.password.search(/[0-9]/) > -1), 
            (this.password.search(/[$&+,:;=?@#*]/) > -1) 
        ]
        this.strength = this.validations.reduce((acc, cur) => acc + Number(cur), 0)
    }

    function() {
    }


    /*
    <label for="password" class="label">Password</label> <!--Password Input Area-->
<input type='password' name="password" class="input border" placeholder="" [(ngModel)]="password" (ngModelChange)="validatePassword()"/>

<div> <!--This will be the indicator bar underneath password--> 
    <span class="">0</span>
    <span class="" *ngIf="(strength > 0)">1</span>
    <span class="" *ngIf="(strength > 1)">2</span>
    <span class="" *ngIf="(strength > 2)">3</span>
    <span class="" *ngIf="(strength > 3)">4</span>
</div>
<div *ngIf="(password.length > 0)"> <!--This will be the user response for validation-->
    <ul>
        <li>
            {{validations[0] ? 'Y' : 'N'}} must be at least 5 characters
        </li>
        <li>
            {{validations[1] ? 'Y' : 'N'}} must contain a capital letter
        </li>
        <li>
            {{validations[2] ? 'Y' : 'N'}} must contain a number
        </li>
        <li>
            {{validations[3] ? 'Y' : 'N'}} must contain at least one of $&+,:;=?@#*
        </li>
    </ul>
</div>
<!--Submit button not able to click until password has necessary strength-->
<button (click)="function()" [disabled]="(strength<4)">Sign Up</button>
    */
}
