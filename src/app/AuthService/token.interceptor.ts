import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse} from '@angular/common/http';
import { AuthService } from './AuthService';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService,  private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {   

//     let currentUser = this.auth.getToken();
//         if (currentUser && currentUser) {
//             req = req.clone({
//                 setHeaders: { 
//                     'Content-Type' : 'application/json',
//                     Authorization: `Bearer ${currentUser}`
//                 }
//             });
//         }
      
//         //## I tried this one but not working
//     // const header = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.auth.getToken())
   
//     // req = req.clone({ headers: header })
  
//     console.log('Intercepted HTTP call', req.headers);
//     debugger;
//     return next.handle(req);

//   }
// }


const token = localStorage.getItem('token');
    if (token) {
      request = request.clone({
        setHeaders: {
          'Authorization': 'Bearer ' + token
        }
      });
    }
    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        setHeaders: {
          'content-type': 'application/json'
        }
      });
    }
    request = request.clone({
      headers: request.headers.set('Accept', 'application/json')
    });
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {       
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        if (error.status === 401) {
          this.router.navigate(['login']);
        }
        if (error.status === 400) {
          alert(error.error);
        }
        return throwError(error);
      }));
}
}