import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexDatepickerComponent} from "./index-datepicker.component";
import {RouterModule} from "@angular/router";
import {
  BsDatepickerModule, BsDatepickerConfig, ComponentLoaderFactory, PositioningService,
  TimepickerModule, TimepickerConfig
} from "ngx-bootstrap";
import {BsDatepickerActions} from "ngx-bootstrap/datepicker/reducer/bs-datepicker.actions";
import {ShareModule} from "../../share/share.module";
import {TimepickerActions} from "ngx-bootstrap/timepicker";

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    BsDatepickerModule,
    TimepickerModule,
    RouterModule.forChild([
      {path:'',component:IndexDatepickerComponent}
    ])
  ],
  declarations: [
    IndexDatepickerComponent
  ],
  providers:[BsDatepickerConfig, ComponentLoaderFactory,PositioningService,BsDatepickerActions,TimepickerConfig,TimepickerActions,]
})
export class IndexDatepickerModule { }
