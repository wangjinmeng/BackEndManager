import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexTabComponent} from "./index-tab.component";
import {RouterModule} from "@angular/router";
import {MyPanelTabModule} from "../../component/my-panel-tab/my-panel-tab.module";

@NgModule({
  imports: [
    CommonModule,
    MyPanelTabModule,
    RouterModule.forChild([
      {
        path:'',
        component:IndexTabComponent
      }
    ])
  ],
  providers:[],
  declarations: [
    IndexTabComponent
  ]
})
export class IndexTabModule { }
