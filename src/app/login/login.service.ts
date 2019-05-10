import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers, RequestOptionsArgs} from '@angular/http';
import { map, catchError } from "rxjs/operators";
import { throwError as observableThrowError, Observable } from 'rxjs';
import { config } from '../../config/config';


@Injectable()
export class LoginService{
    resStatus: any;
    constructor(private http: Http, private config: config){};

    login(employee):Observable<any>{
        let header = new Headers({'content-type' : 'application/json'});      
        let options = new RequestOptions({ headers: header} );
        let body = JSON.stringify(employee);

         return this.http.post(this.config.getAPIresult() + "/api/auth", body, options).pipe(
            map((res: Response) => {
                return res.json();                 
             }),
             catchError(this.handleError));
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