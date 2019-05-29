import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../AuthService/AuthService';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  @Input() public title: string;
  @Input() public isUserLoggedIn: boolean = false;
  
  constructor(private auth : AuthService) { }

  ngOnInit(){}
  ngAfterContentInit() {
    if(this.auth.getToken()!=null)
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
