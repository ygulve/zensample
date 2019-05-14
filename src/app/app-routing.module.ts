import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoginComponent } from './login/login.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {

    path:'list',
    component:EmployeelistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
