import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmComponent } from './confirm/confirm.component';
import { LoadingComponent } from './loading/loading.component';
import {MyModalService} from "./my-modal.service";
import {ModalModule, BsModalService, ComponentLoaderFactory, PositioningService} from "ngx-bootstrap";
import { MsgComponent } from './msg/msg.component';

@NgModule({
  imports: [CommonModule,ModalModule],
  declarations: [ConfirmComponent, LoadingComponent, MsgComponent],
  entryComponents: [ConfirmComponent, LoadingComponent, MsgComponent],
  providers:[BsModalService,ComponentLoaderFactory,PositioningService,MyModalService],
})
export class MyModalModule { }
