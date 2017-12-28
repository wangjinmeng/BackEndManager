import { NgModule }     from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {IndexGuard} from "../guard/index.guard";
import {IndexResolveService} from "../guard/index-resolve/index-resolve.service";
import {IndexUiGeneralComponent} from "./index-ui-general/index-ui-general.component";
import {IndexFormPageComponent} from "./index-form-page/index-form-page.component";
import {AnimationComponent} from "./animation/animation.component";
import {IndexRoleComponent} from "./index-role/index-role.component";
import {TablesComponent} from "./tables/tables.component";
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
        component:IndexUiGeneralComponent
      },
      {
        path:'form',
        component:IndexFormPageComponent
      },
      {
        path:'animation',
        component:AnimationComponent
      },
      {
        path:'tables',
        component:TablesComponent
      },
      {
        path:'authority',
        loadChildren:'app/index/index-authority/index-authority.module#IndexAuthorityModule'
      },
      {
        path:'role',
        component:IndexRoleComponent
      },
      {
        path:'user',
        loadChildren:'app/index/index-user/index-user.module#IndexUserModule'
      },
      {
        path:'tab',
        loadChildren:'app/index/index-tab/index-tab.module#IndexTabModule'
      },
      {
        path:'datepicker',
        loadChildren:'app/index/index-datepicker/index-datepicker.module#IndexDatepickerModule'
      },
      {
        path:'modals',
        loadChildren:'app/index/index-modals/index-modals.module#IndexModalsModule'
      },
      {
        path:'panel',
        loadChildren:'app/index/index-panel/index-panel.module#IndexPanelModule'
      },
      {
        path:'panelTab',
        loadChildren:'app/index/index-panel-tab/index-panel-tab.module#IndexPanelTabModule'
      },
      {
        path:'test',
        loadChildren:'app/index/index-test/index-test.module#IndexTestModule'
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
