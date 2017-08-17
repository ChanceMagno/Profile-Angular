import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import * as $ from 'jquery';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollEventModule } from 'ngx-scroll-event';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { ScrollToModule } from 'ng2-scroll-to-el';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    BrowserAnimationsModule,
    ScrollEventModule,
    Ng2PageScrollModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
