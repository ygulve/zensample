import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  @Input() public title: string;
  @Input() public isUserLoggedIn: boolean = false;
  
  constructor() { }

  ngOnInit(){}
  ngDoCheck() {
debugger;
    console.log("I am here");

    if(localStorage.getItem("token")!=null)
    {
      this.isUserLoggedIn = true;
    }
  }

  logout()
  {
    this.isUserLoggedIn = false;    
    localStorage.removeItem("expires_at");
    localStorage.removeItem("token");
    localStorage.clear();    
  }

}
