import { Component, OnInit, ViewChild, ViewChildren, ContentChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { EmployeeService } from '../employeelist/employee.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../AuthService/AuthService';
import { EventEmitterService } from '../_helpers/event-emitter';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {

  constructor(public toastr: ToastrService, private spinner: NgxSpinnerService,
    public empService: EmployeeService, private router: Router, private auth: AuthService) { }

  public empList: Observable<any>;
  public itemCount: number = 0;
  public noRecord: boolean = false;
  public queryString: any;
  public searchedItem: boolean;
  public itemsFound: string;
  public temp: any[] = [];
  public empdata: any[] = [];
  public index: number;
  public tobeSorted: any = {};
  public header:string ="Employee List";

  ngOnInit() {
    this.getData();       
     
    }

 
  getData() {
    if (this.auth.isTokenExpired() != false) {
      this.spinner.show();
      this.empService.getEmployee().subscribe(res => {
        this.empList = res;      
        this.temp = res;
        this.empdata = res;
        this.empList.forEach(element => {
          if(element.gender == 1)
          {
            element.gender ="Male"
          }
          else
          {
            element.gender ="Female"
          }
        })
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

  editItem(empId) {
    
    this.router.navigate(["employeedetail"],  { queryParams: { empId: empId } });
  }

  onSearch() {

    this.searchedItem = true;
    this.empdata = [];
    this.temp.forEach(element => {

      if (element.firstName.toLowerCase().indexOf(this.queryString.toLowerCase()) > -1
        || element.lastName.toLowerCase().indexOf(this.queryString.toLowerCase()) > -1
        || element.email.toLowerCase().indexOf(this.queryString.toLowerCase()) > -1) {
        this.empdata.push(element);
      }
      else {
        this.index = element.firstName.toLowerCase().indexOf(element.firstName.toLowerCase())

        if (this.index == undefined) {
          this.index = element.lastName.toLowerCase().indexOf(element.lastName.toLowerCase())
        }

        if (this.index == undefined) {
          this.index = element.email.toLowerCase().indexOf(element.email.toLowerCase())
        }

        this.empdata.slice(this.index, 1);
      }

      if (this.empdata.length == 0) {
        this.noRecord = true;
      }
      else {
        this.noRecord = false;
      }
      this.itemsFound = this.queryString;

      if (this.empdata.length == this.empdata.length) {
        this.searchedItem = false;
      }
    });
  }

}
