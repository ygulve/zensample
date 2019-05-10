import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { AuthService } from './AuthService';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {
   
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {   
    debugger;    
    const headersConfig = req.clone({
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      'Authorization': this.auth.getToken()
      })
    });
  
    console.log('Intercepted HTTP call', headersConfig);
    return next.handle(headersConfig);

  }
}