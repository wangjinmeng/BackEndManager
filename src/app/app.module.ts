import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {CannotFoundComponent} from "./cannot-found/cannot-found.component";
import {LoginModule} from "./login/login.module";

import {CoreModule} from "./core/core.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {IndexModule} from "./index/index.module";

@NgModule({
  declarations: [
    AppComponent,
    CannotFoundComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LoginModule,
    IndexModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
