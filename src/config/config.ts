import { Injectable } from '@angular/core';

@Injectable()
export class config {

    private APIresult: string = "https://localhost:44393"

    constructor() {

    }

    public getAPIresult() {
        return this.APIresult;
    }

}