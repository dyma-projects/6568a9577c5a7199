import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Exercice1Component } from './exercice-1/exercice-1.component';


@NgModule({
  declarations: [
    AppComponent,
    Exercice1Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
