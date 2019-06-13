import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { Employee } from '../model/employee';
import { Router } from '@angular/router';
import { MessageService } from '../message/message.service';
import { EventEmitterService } from '../_helpers/event-emitter';
import { EncryptPassword, DecryptPassword } from '../_helpers/encrypt.password';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginPage: FormGroup;
  public header: string = "Login here";
  public _employee: Employee;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public _loginservice: LoginService, private router: Router, private message: MessageService,
    private eventEmitterService: EventEmitterService, ) { }

  ngOnInit() {
    localStorage.clear();
    this.initializeForm();
  }

  initializeForm() {
    this.loginPage = this.formBuilder.group({
      UserId: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required])
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginPage.controls;
  }

  submit(loginPage) {
    debugger;
    this.submitted = true;
    if (loginPage.valid) {

      if (loginPage.status == "INVALID") {
        this.message.showResgistrationFailed();
      }
      else {

        var password = EncryptPassword(loginPage.value.Password, loginPage.value.UserId);
        //loginPage.value.Password = password.toString();

        var decrypt = DecryptPassword(loginPage.value.Password, loginPage.value.UserId);

        this._loginservice.login(loginPage.value).subscribe(res => {

          if (res.token) {
            localStorage.setItem('token', res.token);
            localStorage.setItem("expires_at", JSON.stringify(res.expiresAt));
            this.eventEmitterService.onFirstComponentButtonClick();
            this.router.navigateByUrl('list');
          }

          if (res.error) {
            this.message.showLoginFailed(res.error);
          }
        }, (err) => {
          console.log(err)
        });
      }
    }
  }

  register() {
    this.router.navigateByUrl('register');
  }

}
