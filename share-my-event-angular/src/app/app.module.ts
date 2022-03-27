import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarTitleComponent } from './components/navbar/navbar-title/navbar-title.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarLogoComponent } from './components/navbar/navbar-logo/navbar-logo.component';
import { Page404Component } from './pages/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarLogoComponent,
    NavbarTitleComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
