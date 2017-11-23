import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginService} from "./service/login/login.service";
import {UserInfoService} from "./service/user-infor/user-infor.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers:[LoginService,UserInfoService]
})
export class CoreModule { }
