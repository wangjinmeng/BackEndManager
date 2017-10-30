import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginService} from "./service/login/login.service";
import {UserInfoService} from "./service/user-infor/user-infor.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[LoginService,UserInfoService]
})
export class CoreModule { }
