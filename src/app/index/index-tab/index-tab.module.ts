import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexTabComponent} from "./index-tab.component";
import {TabsModule, TabsetConfig} from "ngx-bootstrap";
import {RouterModule} from "@angular/router";
import {ShareModule} from "../../share/share.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    TabsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path:'',
        component:IndexTabComponent
      }
    ])
  ],
  providers:[TabsetConfig],
  declarations: [
    IndexTabComponent
  ]
})
export class IndexTabModule { }
