// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {
  public getToken(): string {
debugger;
    var strToken = localStorage.getItem('token')
    return strToken;
  }
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
return null;
    //return tokenNotExpired(null,token);
    // return a boolean reflecting 
    // whether or not the token is expired
    //return tokenNotExpired(null, token);
  }
}