import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers, RequestOptionsArgs} from '@angular/http';
import { map, catchError } from "rxjs/operators";
import { throwError as observableThrowError, Observable } from 'rxjs';
import { config } from '../../config/config';
import { Employee } from '../model/employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../AuthService/AuthService';

@Injectable()
export class EmployeeService{

    constructor(private http: HttpClient, private config: config)
    {};

 
    getEmployee()
    {
        debugger;
        this.http.get(this.config.getAPIresult() + "/api/employee")
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );

        // return this.http.get(this.config.getAPIresult() + "/api/employee").pipe(map
        //     ((response :Response) => {
        //         return response.json();
        //     }),
        //     catchError(this.handleError));
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