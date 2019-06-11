import { Injectable } from '@angular/core';

@Injectable()
export class config {

    private APIresult: string = "https://localhost:44334"
    public setHeader:boolean=false;

    constructor() {

    }

    public getAPIresult() {
        return this.APIresult;
    }

    public setHeaderValue()
    {       
        return this.setHeader;
    }

}