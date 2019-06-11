import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { EmployeeDetailService } from './employeedetail.service';
import { MessageService } from '../message/message.service';
import {EncryptPassword} from '../_helpers/encrypt.password';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.scss']
})
export class EmployeedetailComponent implements OnInit {

  public header: string = "Employee Detail";
  public empPage: FormGroup;
  pwdPattern = "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$";
  public empId: number;
  public employeePage: any;
  submitted = false;
  public imagePath;
  imgURL: any;
  public msg:string;
  

  constructor(private formBuilder: FormBuilder, private spinner: NgxSpinnerService,
    private route: ActivatedRoute, public toastr: ToastrService,
    private empService: EmployeeDetailService,
    private message: MessageService) {

    //this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.initializeForm();
    if (this.route.snapshot.queryParams.empId > 0) {
      this.empId = this.route.snapshot.queryParams.empId;
      this.getEmployeeData();
    }
    else {
      this.empId = 0;
      this.spinner.hide();
    }
  }


  initializeForm() {
    this.empPage = this.formBuilder.group({
      EmployeeId: new FormControl(''),
      StaffId: new FormControl('', [Validators.required]),
      FirstName: new FormControl('', [Validators.required]),
      LastName: new FormControl('', [Validators.required]),
      DateOfBirth: new FormControl('', [Validators.required]),
      PhoneNumber: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      DerivcoEmail: new FormControl('', [Validators.required, Validators.email]),
      Gender: new FormControl('', [Validators.required]),
      UserId: new FormControl('', [Validators.required]),
      // Password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(this.pwdPattern)]),
      // ConfirmPassword: new FormControl('', [Validators.required])
    // }, {
    //     validator: MustMatch('Password', 'ConfirmPassword')
       });
  }

   // convenience getter for easy access to form fields
   get f() {
    return this.empPage.controls;
  }


  getEmployeeData() {
    
    this.spinner.show();
    this.empService.getEmployeeDataById(this.empId).subscribe
      (data => {
        this.employeePage = data;
        this.empPage.setValue({      
          EmployeeId : this.empId,
          StaffId: this.employeePage.staffId,
          FirstName: this.employeePage.firstName,
          LastName: this.employeePage.lastName,
          DateOfBirth: this.employeePage.dateOfBirth,
          PhoneNumber: this.employeePage.phoneNumber,
          Email: this.employeePage.email,
          DerivcoEmail: this.employeePage.derivcoEmail,
          Gender: this.employeePage.gender,
          UserId: this.employeePage.userId
          // Password: this.employeePage.password,
          // ConfirmPassword: this.employeePage.password
        })
        
        this.spinner.hide();
      })

  }

  submit(empPage) {

    this.submitted = true;
    if (empPage.valid) {
      if (empPage.status == "INVALID") {
        this.message.showResgistrationFailed();
      }
      else {
        this.spinner.show();

        // var password = EncryptPassword(empPage.value.Password, empPage.value.UserId);
        // empPage.value.Password = password.toString();

        this.empService.UpdateEmployeeDetails(empPage.value).subscribe(
          response => {
            if (response.statusCode == "302") {
              this.message.showUpdateFalied();
              this.reset();
              this.spinner.hide();
            }
            else if (response.statusCode == "404") {
              this.message.showUpdateFalied();
              this.reset();
              this.spinner.hide();
            }
            else if (response.statusCode == "200") {
              this.message.showUpdate();
              this.reset();
              this.spinner.hide();
            }
            else if (response.statusCode == "204") {
              this.message.showUpdateFalied();
              this.reset();
              this.spinner.hide();

            }
          }
        )
      }
    }
  }

  reset()
  {
    this.empPage.controls.setValue[""];
  }


  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.msg = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

}
