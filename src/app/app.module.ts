import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppService} from "./app.service";

import { Select2Component } from 'ng2-select2/ng2-select2';

@NgModule({
  declarations: [
    AppComponent,
    Select2Component,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
