import {NgModule} from '@angular/core';
import {RouterModule,Routes} from "@angular/router";
import {CannotFoundComponent} from "./cannot-found/cannot-found.component";
const appRoutes:Routes=[
  {path:'login',loadChildren: 'app/login/login.module#LoginModule'  },
  {path:'index/:id', loadChildren: 'app/index/index.module#IndexModule' },
  {path:'test', loadChildren: 'app/test/test.module#TestModule' },
  {path: '', redirectTo:'test',pathMatch:'full'},
  {path:'**',component:CannotFoundComponent}
];
@NgModule({
  imports:[
    RouterModule.forRoot(
      appRoutes
      // ,
      // {enableTracing:true}
    )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{}
