import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexModalsComponent, LoadingModule} from './index-modals.component';
import {RouterModule} from "@angular/router";
import {ModalModule, BsModalService, ComponentLoaderFactory, PositioningService} from "ngx-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    RouterModule.forChild([
      {path:'',component:IndexModalsComponent}
    ])
  ],
  providers:[BsModalService,ComponentLoaderFactory,PositioningService],
  declarations: [IndexModalsComponent,LoadingModule],
  entryComponents:[LoadingModule]
})
export class IndexModalsModule { }
