import { Injectable } from '@angular/core';
import {Response} from '@angular/http';
import { map, catchError } from "rxjs/operators";
import { throwError as observableThrowError, Observable } from 'rxjs';
import { config } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({ providedIn: 'root' })
export class EmployeeDetailService{

    constructor(private http: HttpClient, private config: config)
    {};

    getEmployeeDataById(empId):Observable<any>{
    return this.http.get(this.config.getAPIresult() + '/api/employee/' + empId).pipe(
    map((response : Response)=>{
        console.log(response);
        return response;
    }),catchError(this.handleError));
    }


    UpdateEmployeeDetails( empPage):Observable<any>{
        debugger;
        var body = JSON.stringify(empPage);
        return this.http.put(this.config.getAPIresult() + '/api/employee/', body)
        .map((response : Response)=>{
            console.log(response);
            return response;
        }).catch(this.handleError)
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