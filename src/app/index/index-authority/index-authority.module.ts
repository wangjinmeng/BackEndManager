import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ShareModule} from "../../share/share.module";
import {IndexAuthorityComponent} from "./index-authority-component";
import {IndexAuthorityListComponent} from "./list/list.component";
import {IndexAuthorityFormComponent} from "./form/form.component";
import {RouterModule} from "@angular/router";
import {ModalModule, ComponentLoaderFactory, PositioningService} from "ngx-bootstrap";
import {BsModalService} from "ngx-bootstrap";
@NgModule({
  providers:[
    BsModalService,
    ComponentLoaderFactory,
    PositioningService
  ],
  imports:[
    CommonModule,
    ShareModule,
    ModalModule,
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
    IndexAuthorityFormComponent
  ]
})
export class IndexAuthorityModule{}
