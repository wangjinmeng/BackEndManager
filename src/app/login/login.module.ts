import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import { LoginComponent } from './login/login.component';
import {ShareModule} from "../share/share.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    ShareModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: LoginComponent }
    ])
  ],
  providers:[],
  declarations: [LoginComponent],
})
export class LoginModule { }
