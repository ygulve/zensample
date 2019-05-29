// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
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
  }


  isTokenExpired(token?: string): boolean {
    if (!token) token = this.getToken();
    if (!token) return true;

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }



  getTokenExpirationDate(token: string): Date {
    debugger;
    let decoded = jwt_decode(token);
    if (decoded === undefined) return null;
    const date = new Date(0);
    let expDate = +localStorage.getItem("expires_at");
    date.setUTCSeconds(expDate);
    return date;
  }



}