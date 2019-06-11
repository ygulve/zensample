import 'rxjs/add/operator/do';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './AuthService';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
export class JwtInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService,  private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {        
        if (err.status === 401) {
            this.router.navigateByUrl('login');
        }
      }
    });
  }
}