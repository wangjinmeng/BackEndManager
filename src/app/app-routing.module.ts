import {NgModule} from '@angular/core';
import {RouterModule,Routes} from "@angular/router";
import {CannotFoundComponent} from "./cannot-found/cannot-found.component";
import {IconComponent} from "./ui-element/icon/icon.component";
import {UserGuideComponent} from "./user-guide/user-guide.component";
import {GeneralComponent} from "./ui-element/general/general.component";
import {TestComponent} from "./test/test.component";
const appRoutes:Routes=[
  {path:'ui-element/icon',component:IconComponent},
  {path:'ui-element/general',component:GeneralComponent},
  {path:'user-guide',component:UserGuideComponent},
  {path:'test',component:TestComponent},
  {path:'',redirectTo:'user-guide',pathMatch:'full'},
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
