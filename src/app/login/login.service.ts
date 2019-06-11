import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { catchError, tap } from "rxjs/operators";
import { Observable } from 'rxjs';
import { config } from '../../config/config';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class LoginService {
    resStatus: any;
    constructor(private http: HttpClient, private config: config) { };

    login(employee): Observable<any> {
        debugger;
        return this.http.post<any>(this.config.getAPIresult() + "/api/auth", employee)
            .pipe(
                catchError(this.handleError));
    }

    private handleError(error: Response | any) {
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