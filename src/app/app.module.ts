import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpModule, XHRBackend, RequestOptions} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent, EmployeelistComponent
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
  ],
  providers: [config,LoginService,EmployeeService,AuthService,
        {

          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,      
          multi: true
         
        }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
