import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { Employee } from '../model/employee';
import { Router } from '@angular/router';
import { MessageService } from '../message/message.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginPage: FormGroup;
  public header: string = "Login here";
  public _employee: Employee;
  constructor(public _loginservice: LoginService, private router: Router, private message: MessageService) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.loginPage = new FormGroup({
      UserId: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required])
    });
  }

  submit(loginPage) { 
    this._loginservice.login(loginPage.value).subscribe(res => {
      if (res.token) {
        localStorage.setItem('token', res.token);
        localStorage.setItem("expires_at", JSON.stringify(res.expiresAt));

        this.router.navigateByUrl('list');
      }

      if (res.error) {
        this.message.showLoginFailed(res.error);
      }
    }, (err) => {
      console.log(err)
    });
  }

  register(){
    this.router.navigateByUrl('register');
  }

}
