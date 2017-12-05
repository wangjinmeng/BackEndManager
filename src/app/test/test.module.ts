import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { IndexComponent } from './index/index.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { AdDirective } from './common/ad.directive';
import {ModalModule, BsModalService, ComponentLoaderFactory, PositioningService} from "ngx-bootstrap";
import { ModalContentComponent } from './common/modal-content/modal-content.component';
import {ShowModalService} from "./common/show-modal.service";
import { ModalLoadingComponent } from './common/modal-loading/modal-loading.component';
import { ModalConfirmComponent } from './common/modal-confirm/modal-confirm.component';
import {MyModalModule} from "../component/my-modal/my-modal.module";

@NgModule({
  imports: [
    CommonModule,
    MyModalModule,
    RouterModule.forChild([
      {
        path:'',
        component:IndexComponent
      }
    ])
  ],
  declarations: [IndexComponent, AdBannerComponent, AdDirective],
})
export class TestModule { }
