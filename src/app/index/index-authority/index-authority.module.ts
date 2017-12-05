import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ShareModule} from "../../share/share.module";
import {IndexAuthorityComponent} from "./index-authority-component";
import {IndexAuthorityListComponent} from "./list/list.component";
import {IndexAuthorityFormComponent} from "./form/form.component";
import {RouterModule} from "@angular/router";
import {ModalModule, ComponentLoaderFactory, PositioningService} from "ngx-bootstrap";
import {BsModalService} from "ngx-bootstrap";
import {IndexAuthorityLoadingComponent} from './loading/loading.component';
import {IndexAuthoritySuccessComponent} from './success/success.component';
import {MyModalModule} from "../../component/my-modal/my-modal.module";
@NgModule({
  providers:[
    BsModalService,
    ComponentLoaderFactory,
    PositioningService
  ],
  imports:[
    CommonModule,
    ShareModule,
    MyModalModule,
    RouterModule.forChild([
      {
        path:'',
        component:IndexAuthorityComponent,
        children:[
          {path:'',component:IndexAuthorityListComponent},
          {path:'form',component:IndexAuthorityFormComponent}
        ]
      }
    ])
  ],
  declarations:[
    IndexAuthorityComponent,
    IndexAuthorityListComponent,
    IndexAuthorityFormComponent,
    IndexAuthorityLoadingComponent,
    IndexAuthoritySuccessComponent
  ],
  entryComponents:[IndexAuthorityLoadingComponent,IndexAuthoritySuccessComponent]
})
export class IndexAuthorityModule{}
