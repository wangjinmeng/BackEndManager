import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabsModule} from "ngx-bootstrap";
import {MyPanelTabComponent} from "./my-panel-tab.component";
import {MyPanelTabGroupComponent} from "./my-panel-tab-group.component";
import {MyPanelTabNavComponent} from "./my-panel-tab-nav.component";

@NgModule({
  imports: [
    CommonModule,
    TabsModule
  ],
  declarations: [MyPanelTabComponent,MyPanelTabGroupComponent,MyPanelTabNavComponent],
  exports: [MyPanelTabComponent,MyPanelTabGroupComponent]
})
export class MyPanelTabModule { }
