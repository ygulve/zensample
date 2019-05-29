import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from 'src/config/config';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class RegisterService {

    constructor(private http: HttpClient, private config: config) { }

    regsiter(registerPage): Observable<any> {

        return this.http.post<any>(this.config.getAPIresult() + "/api/register", registerPage)
            .pipe(
                catchError(this.handleError));
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return Observable.throw(errMsg);
    }
}