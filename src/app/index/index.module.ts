import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import {IndexRoutingModule} from "./index-routing.module";
import {ShareModule} from "../share/share.module";
import { IndexFooterComponent } from './index-footer/index-footer.component';
import { IndexHeaderComponent } from './index-header/index-header.component';
import { IndexSidebarComponent } from './index-sidebar/index-sidebar.component';
import { IndexUiGeneralComponent } from './index-ui-general/index-ui-general.component';
import { IndexFormPageComponent } from './index-form-page/index-form-page.component';
import { AnimationComponent } from './animation/animation.component';
import { IndexTreePageComponent } from './index-tree-page/index-tree-page.component';
import {NavService} from "./nav.service";
import {AuthorityService} from "./core/service/authority.service";
import {IndexAuthorityComponent} from "./index-authority/index-authority-component";
import { IndexAuthorityListComponent } from './index-authority/list/list.component';
import { IndexAuthorityFormComponent } from './index-authority/form/form.component';
import { IndexRoleComponent } from './index-role/index-role.component';
import { IndexRoleListComponent } from './index-role/list/list.component';
import { IndexRoleFormComponent } from './index-role/form/form.component';
import {RoleService} from "./core/service/role.service";

@NgModule({
  declarations: [
    IndexComponent,
    IndexFooterComponent,
    IndexHeaderComponent,
    IndexSidebarComponent,
    IndexUiGeneralComponent,
    IndexFormPageComponent,
    AnimationComponent,
    IndexFormPageComponent,
    IndexTreePageComponent,
    IndexAuthorityComponent,
    IndexAuthorityListComponent,
    IndexAuthorityFormComponent,
    IndexRoleComponent,
    IndexRoleListComponent,
    IndexRoleFormComponent
  ],
  imports: [
    ShareModule,
    IndexRoutingModule
  ],
  providers:[
    NavService,
    AuthorityService,
    RoleService
  ]
})
export class IndexModule {}
