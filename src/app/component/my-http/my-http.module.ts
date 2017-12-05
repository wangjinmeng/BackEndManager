import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyHttpService} from "./my-http.service";
import {HttpClientModule} from "@angular/common/http";
import {MyModalModule} from "../my-modal/my-modal.module";

@NgModule({
  imports: [CommonModule,HttpClientModule,MyModalModule],
  declarations: [],
  providers:[MyHttpService]
})
export class MyHttpModule { }
