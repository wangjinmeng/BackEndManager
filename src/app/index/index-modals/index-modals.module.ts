import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexModalsComponent} from './index-modals.component';
import {RouterModule} from "@angular/router";
import {MyModalModule} from "../../component/my-modal/my-modal.module";
import {MyHttpModule} from "../../component/my-http/my-http.module";

@NgModule({
  imports: [
    CommonModule,
    MyModalModule,
    MyHttpModule,
    RouterModule.forChild([
      {path:'',component:IndexModalsComponent}
    ])
  ],
  providers:[],
  declarations: [IndexModalsComponent]
})
export class IndexModalsModule { }
