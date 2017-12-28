import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPanelComponent } from './my-panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyPanelComponent],
  exports:[MyPanelComponent]
})
export class MyPanelModule { }
