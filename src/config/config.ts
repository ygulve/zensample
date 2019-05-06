import { Injectable } from '@angular/core';

@Injectable()
export class config {

    private APIresult: string = "http://localhost:44393"

    constructor() {

    }

    public getAPIresult() {
        return this.APIresult;
    }

}