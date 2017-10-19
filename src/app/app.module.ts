import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import {AppRoutingModule} from "./app-routing.module";
import { CannotFoundComponent } from './cannot-found/cannot-found.component';
import {IconComponent} from "./ui-element/icon/icon.component";
import { ContTitleComponent } from './common/cont-title/cont-title.component';
import {UserGuideModule} from "./user-guide/user-guide.module";
import {UnlessDirective} from "./unless.directive";
import { GeneralComponent } from './ui-element/general/general.component';
import { TestComponent } from './test/test.component';
import { PagebarComponent } from './common/component/pagebar/pagebar.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AsideComponent,
    CannotFoundComponent,
    IconComponent,
    ContTitleComponent,
    UnlessDirective,
    GeneralComponent,
    TestComponent,
    PagebarComponent
  ],
  imports: [
    BrowserModule,
    UserGuideModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
