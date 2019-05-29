import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RegisterService } from './resgister.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from '../message/message.service';
import { Router } from '@angular/router';
// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public itemcount: number = 0;
  public registerPage: FormGroup;
  public required: boolean;
  public header: string = "Register here";
  submitted = false;
  pwdPattern = "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$";
  

  constructor(private registerService: RegisterService,
    private spinner: NgxSpinnerService,
    private message: MessageService, private router: Router, private formBuilder: FormBuilder) { }
    
  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.registerPage = this.formBuilder.group({
      EmployeeId: new FormControl(0),
      StaffId: new FormControl('', [Validators.required]),
      FirstName: new FormControl('', [Validators.required]),
      LastName: new FormControl('', [Validators.required]),
      DateOfBirth: new FormControl('', [Validators.required]),
      PhoneNumber: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Gender: new FormControl('', [Validators.required]),   
      UserId: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(this.pwdPattern)]),
      ConfirmPassword: new FormControl('', [Validators.required])     
    }, {
      validator: MustMatch('Password', 'ConfirmPassword')
  });
  }


  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        if (control.disabled == false) {
          if ((control.status == "INVALID")) {
            control.markAsTouched();
            return false;
          }
        }
      }
    });

    return true;
  }

    // convenience getter for easy access to form fields
    get f() { 
      return this.registerPage.controls; }


  submit(registerPage) {
    debugger;
    this.submitted = true;
    if (this.registerPage.valid) {
      if (this.validateAllFormFields(this.registerPage) == true) {
        if (registerPage.status == "INVALID") {
          this.required = true;
        }
        else {
          this.spinner.show();         
         
          this.registerService.regsiter(registerPage.value).subscribe(
            response => {
              if (response.status == "302") {
                this.message.showResgistrationFailed();
                this.reset();
                this.spinner.hide();
              }
              else if(response.status == "404")
              {
                this.message.showResgistrationFailed();
                this.reset();
                this.spinner.hide();
              }
              else if(response.status == "200") {
                this.message.showResgistrationSuccess();
                this.reset();
                this.spinner.hide();
                
              }
            }
          )
        }
      }
    }
    else
    {
      return;
    }
  }


  reset()
  {
    this.registerPage.controls.setValue[""];
  }

  fillUserId(){
    var fName: string = this.registerPage.controls["FirstName"].value;
    var lName :string =  this.registerPage.controls["LastName"].value;

    this.registerPage.controls["UserId"].setValue(fName.charAt(0).toLocaleLowerCase() + lName.charAt(0).toLocaleLowerCase() + this.registerPage.controls["StaffId"].value);

  }




}
