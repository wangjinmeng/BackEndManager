import {NgModule} from '@angular/core';
import {RouterModule,Routes} from "@angular/router";
import {TestComponent} from "./test/test.component";
import {CannotFoundComponent} from "./cannot-found/cannot-found.component";
import {IconComponent} from "./ui-element/icon/icon.component";
const appRoutes:Routes=[
  {path:'test',component:TestComponent},
  {path:'ui-element/icon',component:IconComponent},
  // {path:'',redirectTo:'/ui-element/icon',pathMatch:'full'},
  {path:'**',component:CannotFoundComponent},
];
@NgModule({
  imports:[
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
      )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{}
