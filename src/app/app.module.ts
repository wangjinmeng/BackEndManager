import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { TestComponent } from './test/test.component';
import {AppRoutingModule} from "./app-routing.module";
import { CannotFoundComponent } from './cannot-found/cannot-found.component';
import {IconComponent} from "./ui-element/icon/icon.component";
import { ContTitleComponent } from './common/cont-title/cont-title.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AsideComponent,
    TestComponent,
    CannotFoundComponent,
    IconComponent,
    ContTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
