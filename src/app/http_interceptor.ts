import { Injectable } from '@angular/core';
import {
    Http,
    ConnectionBackend,
    RequestOptions,
    RequestOptionsArgs,
    Response,
    Headers,
    Request
} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { AuthService } from './AuthService/AuthService';


@Injectable()
export class HttpInterceptor extends Http {
    private server: string; 

    constructor(
        backend: ConnectionBackend,
        defaultOptions: RequestOptions 
        , public auth: AuthService    
    ) {
        super(backend, defaultOptions);
    }
      request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options);
       }

      private getRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('Content-Type', 'application/json');        
        options.headers.append('Pragma', 'no-cache');
        options.headers.append('Cache-Control','no-cache');
        options.headers.append('Authorization', this.auth.getToken())

        return options;
    }
}
