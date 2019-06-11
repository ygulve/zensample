import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { EmployeeService } from '../employeelist/employee.service';
import { Router } from '@angular/router';
import { AuthService } from '../AuthService/AuthService';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {

  public header: string = "Asset Allocation";
  public empList: Observable<any>;
  
  constructor(public toastr: ToastrService, private spinner: NgxSpinnerService,
    public empService: EmployeeService, private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.header = "Asset Allocation";
    this.getEmployeeList();
  }

  getEmployeeList()
  {
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

}
