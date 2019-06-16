import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewLetterComponent } from './new-letter/new-letter.component';
import { KeyPressComponent } from './key-press/key-press.component';
import { ResultBlockComponent } from './result-block/result-block.component';

@NgModule({
  declarations: [
    AppComponent,
    NewLetterComponent,
    KeyPressComponent,
    ResultBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
