import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagebarComponent} from "./component/pagebar/pagebar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ShareBoxComponent } from './component/share-box/share-box.component';
import { ShareAlertComponent } from './component/share-alert/share-alert.component';
import { ShareCalloutComponent } from './component/share-callout/share-callout.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PagebarComponent,
    ShareBoxComponent,
    ShareAlertComponent,
    ShareCalloutComponent
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PagebarComponent,
    ShareBoxComponent,
    ShareAlertComponent,
    ShareCalloutComponent
  ]
})
export class ShareModule { }
