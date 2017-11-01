import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {CannotFoundComponent} from "./cannot-found/cannot-found.component";
import {LoginModule} from "./login/login.module";
import {IndexModule} from "./index/index.module";
import {CoreModule} from "./core/core.module";
// import {RegisterModule} from "./register/register.module";
// import {ForgetPasswordModule} from "./forget-password/forget-password.module";
@NgModule({
  declarations: [
    AppComponent,
    CannotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LoginModule,
    IndexModule,
    // RegisterModule,
    // ForgetPasswordModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
