import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { EmployeeService } from '../employeelist/employee.service';
import { Router } from '@angular/router';
import { AuthService } from '../AuthService/AuthService';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MessageService } from '../message/message.service';
import { AssetService } from './asset.service';


@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {

  public header: string = "Asset Allocation";
  public assetPage: FormGroup;
  public assetList: Observable<any>;
  public empList: Observable<any>;
  public dataList: Observable<Object[]>;
  submitted = false;
  public noRecord: boolean = false;
  public queryString: any;
  public searchedItem: boolean;
  public temp: any[] = [];
  public assetdata: any[] = [];
  public index: number;
  public itemsFound: string;
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;

  constructor(private formBuilder: FormBuilder, public toastr: ToastrService, private spinner: NgxSpinnerService,
    public empService: EmployeeService, public assetService: AssetService, private router: Router, private auth: AuthService,
    private message: MessageService) {

  }

  ngOnInit() {
    this.header = "Asset Allocation";
    this.initializeForm();
    this.getEmployeeList();
    this.getAssetList();
  }

  initializeForm() {
    this.assetPage = this.formBuilder.group({
      EmployeeId: new FormControl('', [Validators.required]),
      DeskNumber: new FormControl('', [Validators.required]),
      AssetNumber: new FormControl('', [Validators.required])
    });
  }

  getAssetList() {
    if (this.auth.isTokenExpired() != false) {
      this.spinner.show();
      this.assetService.getAsset().subscribe(res => {
        this.assetList = res;
        this.temp = res;
        this.assetdata = res;
        this.spinner.hide();
      }, (err) => {
        console.log(err)
      });
    }
  }

  getEmployeeList() {
    if (this.auth.isTokenExpired() != false) {
      this.spinner.show();
      this.empService.getEmployee().subscribe(res => {
        this.empList = res;
        this.spinner.hide();
      }, (err) => {
        console.log(err)
      });
    }
    else {
      localStorage.clear();
      this.router.navigateByUrl("login");
    }
  }

  submit(assetPage) {
    debugger;
    this.submitted = true;
    if (assetPage.valid) {
      if (assetPage.status == "INVALID") {
        this.message.showResgistrationFailed();
      }
      else {
        this.spinner.show();

        this.assetService.addAsset(assetPage.value).subscribe(
          response => {
            if (response.status == "302") {
              this.message.showUpdateFalied();
              this.reset();
              this.spinner.hide();
            }
            else if (response.status == "404") {
              this.message.showUpdateFalied();
              this.reset();
              this.spinner.hide();
            }
            else if (response.status == "200") {
              this.message.showUpdate();
              this.reset();
              this.spinner.hide();
            }
            else if (response.status == "204") {
              this.message.showUpdateFalied();
              this.reset();
              this.spinner.hide();

            }
          }
        )
      }
    }
  }
  reset() {
    this.assetPage.controls.setValue[""];
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.assetPage.controls;
  }


  onSearch() {
    debugger;
    this.searchedItem = true;
    this.assetdata = [];
    this.temp.forEach(element => {

      if (element.name.toLowerCase().indexOf(this.queryString.toLowerCase()) > -1
        || element.assetNumber.toLowerCase().indexOf(this.queryString.toLowerCase()) > -1
        || element.deskNumber.toLowerCase().indexOf(this.queryString.toLowerCase()) > -1) {
        this.assetdata.push(element);
      }
      else {
        this.index = element.name.toLowerCase().indexOf(element.name.toLowerCase())

        if (this.index == undefined) {
          this.index = element.assetNumber.toLowerCase().indexOf(element.assetNumber.toLowerCase())
        }

        if (this.index == undefined) {
          this.index = element.deskNumber.toLowerCase().indexOf(element.deskNumber.toLowerCase())
        }

        this.assetdata.slice(this.index, 1);
      }

      if (this.assetdata.length == 0) {
        this.noRecord = true;
      }
      else {
        this.noRecord = false;
      }
      this.itemsFound = this.queryString;

      if (this.assetdata.length == this.temp.length) {
        this.searchedItem = false;
      }
    });
  }

  editItem(empId) {
    this.spinner.show();
    this.closeAddExpenseModal.nativeElement.click();
    this.spinner.hide();
  }

}
