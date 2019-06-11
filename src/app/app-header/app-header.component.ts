import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../AuthService/AuthService';
import { EventEmitterService } from '../_helpers/event-emitter';
import { config } from 'src/config/config';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  public title: string;
  private isUserLoggedIn: boolean;

  constructor(private auth: AuthService, 
    private eventEmitterService: EventEmitterService, private config: config) { }

  ngOnInit() {

    if(localStorage.getItem("isloggedin") == undefined)
    {
    if (this.eventEmitterService.subsVar == undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.
        invokeFirstComponentFunction.subscribe((name: string) => {
          this.isUserLoggedIn = true;       
          localStorage.setItem("isloggedin", "yes");  
        });
  }
}
else{
  this.isUserLoggedIn = true;       
}
  }

  logout() {
    this.isUserLoggedIn = false;
    localStorage.removeItem("expires_at");
    localStorage.removeItem("token");
    localStorage.clear();
  }

}
