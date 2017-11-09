import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShareModule} from "../share/share.module";
import {RouterModule} from "@angular/router";
import {ForgetPasswordComponent} from "./forget-password/forget-password.component";

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild([
      { path: '', component: ForgetPasswordComponent }
    ])
  ],
  declarations: [ForgetPasswordComponent]
})
export class ForgetPasswordModule { }
