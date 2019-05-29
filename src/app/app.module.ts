import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpModule, XHRBackend, RequestOptions} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from 'ngx-spinner';

import { LoginComponent } from './login/login.component';
import{ LoginService} from './login/login.service';

import { config } from "../config/config";
import { FormsModule,ReactiveFormsModule   } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { ToastrModule } from 'ngx-toastr';
import { EmployeeService } from './employeelist/employee.service';
import { TokenInterceptor } from './AuthService/token.interceptor';
import {AuthService} from './AuthService/AuthService';
import { ErrorInterceptor } from './AuthService/ErrorInterceptor';
import { AppHeaderComponent } from './app-header/app-header.component';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register/resgister.service';
import { MessageService } from './message/message.service';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import {MatDatepickerModule, MatInputModule,MatNativeDateModule, DateAdapter} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DateFormat } from 'src/config/date-format';
@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent, 
    EmployeelistComponent, 
    AppHeaderComponent, 
    RegisterComponent, 
    EmployeedetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }), // ToastrModule added,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    MatDatepickerModule, MatInputModule,MatNativeDateModule,
  ],
  providers: [config,LoginService,EmployeeService,AuthService,RegisterService,MessageService,
        {

          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true       
         
        },
        {
           provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true 
        },{
provide:DateAdapter,
useClass:DateFormat
        }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private dateAdapter:DateAdapter<Date>) {
		dateAdapter.setLocale('en-in'); // DD/MM/YYYY
	}
}
