import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoginComponent } from './login/login.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { RegisterComponent } from './register/register.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { AssetComponent } from './asset/asset.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {

    path:'list',
    component:EmployeelistComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'employeedetail',
    component:EmployeedetailComponent
  },
  {
    path:'asset',
    component:AssetComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
