import { NgModule }     from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {IndexGuard} from "../guard/index.guard";
import {IndexResolveService} from "../guard/index-resolve/index-resolve.service";
import {IndexUiGeneralComponent} from "./index-ui-general/index-ui-general.component";
import {IndexFormPageComponent} from "./index-form-page/index-form-page.component";
import {IndexTreePageComponent} from "./index-tree-page/index-tree-page.component";
import {AnimationComponent} from "./animation/animation.component";
const routes: Routes = [
  { path: '',
    component: IndexComponent,
    canActivate:[IndexGuard],
    resolve:{
      userInfo:IndexResolveService
    },
    children:[
      {path:'general',component:IndexUiGeneralComponent},
      {path:'form',component:IndexFormPageComponent},
      {path:'animation',component:AnimationComponent},
      {path:'tree',component:IndexTreePageComponent},
      {path:'',redirectTo:'general',pathMatch:'full'}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule{}
