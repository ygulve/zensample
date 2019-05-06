import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpModule, XHRBackend, RequestOptions} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import{ LoginService} from './login/login.service';
import { config } from "../config/config";
import { FormsModule,ReactiveFormsModule   } from '@angular/forms';
import { HttpInterceptor } from './http_interceptor';

@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [config,LoginService,
        {

          provide: HttpInterceptor,
          useFactory:
          (backend: XHRBackend, defaultOptions: RequestOptions) => {
              return new HttpInterceptor(backend, defaultOptions);
          },
          deps: [XHRBackend, RequestOptions]
        }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
