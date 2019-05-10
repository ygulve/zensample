import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl   } from '@angular/forms';
import  {LoginService} from '../login/login.service';
import {Employee} from '../model/employee';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginPage: FormGroup;
  public header: string = "Login here";
  public message: string;
  public _employee : Employee;
  constructor(public _loginservice : LoginService) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm()
  {
    this.loginPage = new FormGroup({
      UserId : new FormControl('',[Validators.required]),
      Password: new FormControl('',[Validators.required])
    });


  }

  submit(loginPage)
  {    

    debugger;
    this._loginservice.login(loginPage.value).subscribe(
      response => {

          this.message = response;
          if (response.statusCode == "302") {
         alert("Ohhh... Problem");
        }
        else {
          alert("Success");
        }
      });

  }

}