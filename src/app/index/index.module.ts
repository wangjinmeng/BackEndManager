import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import {IndexRoutingModule} from "./index-routing.module";
import {ShareModule} from "../share/share.module";
import {IndexGuard} from "../guard/index.guard";
import { WidgetBoxComponent } from './widget-box/widget-box.component';
import { IndexFooterComponent } from './index-footer/index-footer.component';
import { IndexHeaderComponent } from './index-header/index-header.component';
import {IndexResolveService} from "../guard/index-resolve/index-resolve.service";
import { IndexSidebarComponent } from './index-sidebar/index-sidebar.component';
import { IndexUiGeneralComponent } from './index-ui-general/index-ui-general.component';

@NgModule({
  declarations: [IndexComponent, WidgetBoxComponent, IndexFooterComponent, IndexHeaderComponent, IndexSidebarComponent, IndexUiGeneralComponent],
  imports: [
    ShareModule,
    IndexRoutingModule
  ],
  providers:[IndexGuard,IndexResolveService]
})
export class IndexModule { }
