import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {IndexUserComponent} from "./index-user.component";
import {IndexUserFormComponent} from "./form/form.component";
import {IndexUserListComponent} from "./list/list.component";
import {ShareModule} from "../../share/share.module";
import {MyHttpModule} from "../../component/my-http/my-http.module";
import {MyModalModule} from "../../component/my-modal/my-modal.module";
import {IndexUserService} from "./index-user.service";
@NgModule({
  imports:[
    CommonModule,
    ShareModule,
    MyHttpModule,
    MyModalModule,
    RouterModule.forChild([
      {
        path:'',
        component:IndexUserComponent,
        children:[
          {path:'list',component:IndexUserListComponent},
          {path:'form',component:IndexUserFormComponent},
          {path:'',redirectTo:'list',pathMatch:'full'}
        ]
      }
    ])
  ],
  declarations:[IndexUserListComponent,IndexUserFormComponent,IndexUserComponent],
  providers:[IndexUserService]
})
export class IndexUserModule{}
