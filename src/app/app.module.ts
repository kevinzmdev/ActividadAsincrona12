import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RetoModule } from './reto/reto.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RetoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
