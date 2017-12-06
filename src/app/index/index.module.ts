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
import { IndexRoleComponent } from './index-role/index-role.component';
import { IndexRoleListComponent } from './index-role/list/list.component';
import { IndexRoleFormComponent } from './index-role/form/form.component';
import { TablesComponent } from './tables/tables.component';

import {TablesService} from "./tables/tables.service";
import { TablesPipe } from './tables/tables.pipe';
import {IndexCoreModule} from "./core/index.core.module";


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
    IndexRoleComponent,
    IndexRoleListComponent,
    IndexRoleFormComponent,
    TablesComponent,
    TablesPipe
  ],
  imports: [
    ShareModule,
    IndexCoreModule,
    IndexRoutingModule
  ],
  providers:[
    TablesService
  ]
})
export class IndexModule {}
