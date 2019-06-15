import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {RatingModule} from 'primeng/rating';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { NewLetterComponent } from './new-letter/new-letter.component';
import { TestKepPressComponent } from './test-kep-press/test-kep-press.component';
import { ResultBlockComponent } from './result-block/result-block.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    HeroFormComponent,
    NewLetterComponent,
    TestKepPressComponent,
    ResultBlockComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
