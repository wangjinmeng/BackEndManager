import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import { LoginComponent } from './login/login.component';
import {ShareModule} from "../share/share.module";
import {HttpClientModule} from "@angular/common/http";
import {ParticleModule} from "freeng/component/particle/particle.directive";

@NgModule({
  imports: [
    ShareModule,
    HttpClientModule,
    ParticleModule,
    RouterModule.forChild([
      { path: '', component: LoginComponent }
    ])
  ],
  providers:[],
  declarations: [LoginComponent],
})
export class LoginModule { }
