import { Injectable } from '@angular/core';

import { Observable } from "rxjs";
import { of } from "rxjs";
import { UserAuth } from "../models/UserAuth";
import { AppUser } from "../models/AppUser";
import { LoginMock } from "../login-mock";

@Injectable({
    providedIn: 'root',
  })

  export class SecurityService {
  
    constructor() { }

    securityObject: UserAuth = new UserAuth();

    resetSecurityObject() {
        this.securityObject.userName = "";
        this.securityObject.bearerToken = "";
        this.securityObject.isAuthenticated = false;
        this.securityObject.isAdmin = false;
        localStorage.removeItem("bearerToken");
    }

    login(entity: AppUser): Observable<UserAuth> {
        this.resetSecurityObject();
        Object.assign(this.securityObject, LoginMock.find(user => user.userName.toLowerCase() === entity.userName.toLowerCase()));
        if (this.securityObject.userName !== "") {
            localStorage.setItem("bearerToken", this.securityObject.bearerToken);
        }
        return of<UserAuth>(this.securityObject);
    }

    logout() {
        this.resetSecurityObject();
    }
  
  }