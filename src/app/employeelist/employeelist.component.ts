import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import {EmployeeService} from '../employeelist/employee.service';


@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {

  constructor(public toastr: ToastrService,private spinner: NgxSpinnerService,
            public empService:EmployeeService) { }

  public empList :any[]=[];
  public itemCount:number =0;
  public noRecord:boolean=false;
  public queryString: any;
  public searchedItem: boolean;
  public itemsFound: string;
  public temp: any[] = [];
  public index: number;
  public tobeSorted: any = {};


  ngOnInit() {
    this.spinner.show();
    this.empService.getEmployee();
  }

  getData(){


  }

}
