import { NgModule }     from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {IndexGuard} from "../guard/index.guard";
import {IndexResolveService} from "../guard/index-resolve/index-resolve.service";
import {IndexUiGeneralComponent} from "./index-ui-general/index-ui-general.component";
import {IndexFormPageComponent} from "./index-form-page/index-form-page.component";
import {IndexTreePageComponent} from "./index-tree-page/index-tree-page.component";
import {AnimationComponent} from "./animation/animation.component";
import {IndexAuthorityComponent} from "./index-authority/index-authority-component";
import {IndexRoleComponent} from "./index-role/index-role.component";
import {TablesComponent} from "./tables/tables.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {IndexUserComponent} from "./index-user/index-user.component";
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
          style:'fa  fa-cubes',
          id:1
        }
      },
      {
        path:'form',
        component:IndexFormPageComponent,
        data: {
          path: 'form',
          name:'表单',
          style:'glyphicon glyphicon-list-alt',
          id:2
        }
      },
      {
        path:'animation',
        component:AnimationComponent,
        data: {
          path: 'animation',
          name:'动画',
          style:'glyphicon glyphicon-film ',
          id:3
        }
      },
      {
        path:'tables',
        component:TablesComponent,
        data: {
          path: 'tables',
          name:'表格',
          id:4
        }
      },
      {
        path:'calendar',
        component:CalendarComponent,
        data: {
          path: 'calendar',
          name:'日期',
          id:5
        }
      },
      {
        path:'tree',
        component:IndexTreePageComponent,
        data: {
          path: 'tree',
          name:'树',
          style:'fa  fa-heartbeat',
          id:6
        }
      },
      {
        path:'authority',
        data:   {
          path: 'authority',
          name:'权限管理',
          style:'fa  fa-heartbeat',
          id:7
        },
        loadChildren:'app/index/index-authority/index-authority.module#IndexAuthorityModule'
      },
      {
        path:'role',
        component:IndexRoleComponent,
        data:   {
          path: 'role',
          name:'角色管理',
          style:'fa  fa-user',
          id:8
        }
      },
      {
        path:'user',
        component:IndexUserComponent,
        data:   {
          path: 'user',
          name:'用户管理',
          style:'fa  fa-user',
          id:9
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
