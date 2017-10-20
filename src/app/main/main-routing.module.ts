import {NgModule} from '@angular/core';
import {RouterModule,Routes} from "@angular/router";
import {IndexComponent} from "../login/index/index.component";
const appRoutes:Routes=[
  {path:'',component:IndexComponent}
];
@NgModule({
  imports:[
    RouterModule.forChild(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class MainRoutingModule{}
