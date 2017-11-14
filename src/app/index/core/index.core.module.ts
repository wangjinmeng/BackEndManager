import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthorityService} from "./service/authority.service";
import {NavService} from "./service/nav.service";
import {RoleService} from "./service/role.service";
import {UserService} from "./service/user.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
    AuthorityService,
    NavService,
    RoleService,
    UserService
  ]
})
export class IndexCoreModule { }
