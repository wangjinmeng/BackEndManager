import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {UserGuideComponent} from "./user-guide.component";
@NgModule({
  imports:[
    RouterModule.forChild([
      {path:'user-guide',component:UserGuideComponent}
    ])
  ],
  exports:[RouterModule]
})
export  class  UserGuideRoutingModule{}
