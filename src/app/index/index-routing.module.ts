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
      {
        path:'general',
        component:IndexUiGeneralComponent,
        data: {
          path: 'general',
          name:'小部件',
          id:1
        }
      },
      {
        path:'form',
        component:IndexFormPageComponent,
        data: {
          path: 'form',
          name:'表单',
          id:2
        }
      },
      {
        path:'animation',
        component:AnimationComponent,
        data: {
          path: 'animation',
          name:'动画',
          id:3
        }
      },
      {
        path:'tree',
        component:IndexTreePageComponent,
        data: {
          path: 'tree',
          name:'树',
          id:4
        }
      },
      {path:'',redirectTo:'general',pathMatch:'full'}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[
    IndexGuard,
    IndexResolveService,
  ]
})
export class IndexRoutingModule{}
