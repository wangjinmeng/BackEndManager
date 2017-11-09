import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {RegisterComponent} from "./register/register.component";
import {ShareModule} from "../share/share.module";

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild([
      { path: '', component: RegisterComponent }
    ])
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
