import {NgModule} from "@angular/core";
import {UserGuideComponent} from "./user-guide.component";
import {CommonModule} from "@angular/common";
import {UserGuideRoutingModule} from "./user-guide-routing.module";
@NgModule({
  imports:[
    CommonModule,
    UserGuideRoutingModule
  ],
  declarations:[
    UserGuideComponent
  ],
  exports:[UserGuideComponent]
})
export class UserGuideModule{}
