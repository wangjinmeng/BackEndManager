import { NgModule }     from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {IndexGuard} from "../guard/index.guard";
import {WidgetBoxComponent} from "./widget-box/widget-box.component";
const routes: Routes = [
  { path: '',
    component: IndexComponent,
    canActivate:[IndexGuard],
    children:[
      {path:'',component:WidgetBoxComponent}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule{}
