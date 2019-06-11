import { Injectable } from '@angular/core';
import {Response} from '@angular/http';
import { map, catchError } from "rxjs/operators";
import { throwError as observableThrowError, Observable } from 'rxjs';
import { config } from '../../config/config';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class EmployeeService{

    constructor(private http: HttpClient, private config: config)
    {};

 
    getEmployee(): Observable<any>
        {
        
        return this.http.get(this.config.getAPIresult()+ "/api/employee").pipe(
            map((response: Response) => {
               return  response

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
        return observableThrowError(errMsg);
    }

}