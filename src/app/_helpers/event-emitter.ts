import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';    

//Reference from following link
//https://www.c-sharpcorner.com/article/simple-way-to-execute-a-function-in-a-component-from-another-component/
@Injectable({    
  providedIn: 'root'    
})    
export class EventEmitterService {    
    
  invokeFirstComponentFunction = new EventEmitter();    
  subsVar: Subscription;    
    
  constructor() { }    
    
  onFirstComponentButtonClick() {    
    this.invokeFirstComponentFunction.emit();    
  }    
}    