import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewLetterComponent } from './new-letter/new-letter.component';
import { KeyPressComponent } from './key-press/key-press.component';
import { ResultBlockComponent } from './result-block/result-block.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NewLetterComponent,
    KeyPressComponent,
    ResultBlockComponent,
    MenuPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
