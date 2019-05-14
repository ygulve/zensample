import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers, RequestOptionsArgs} from '@angular/http';
import { map, catchError, tap } from "rxjs/operators";
import { throwError as observableThrowError, Observable } from 'rxjs';
import { config } from '../../config/config';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class LoginService{
    resStatus: any;
    constructor(private http: HttpClient, private config: config){};



    login(employee): Observable<any>{       
        // let body = JSON.stringify(employee);

        //  return this.http.post(this.config.getAPIresult() + "/api/auth", body).pipe(
        //     map((res: Response) => {
        //         return res.json();                 
        //      }),
        //      catchError(this.handleError));
debugger;
        return this.http.post<any>(this.config.getAPIresult()  + "/api/auth", employee)
    .pipe(
      tap(_ => this.log('login')),
      catchError(this.handleError));
    }


    /** Log a HeroService message with the MessageService */
private log(message: string) {
    console.log(message);
  }
  
    private handleError(error: Response | any) {
        debugger;
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return Observable.throw(errMsg);
    }

}