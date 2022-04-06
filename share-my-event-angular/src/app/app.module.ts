import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LogInComponent } from './pages/log-in/log-in.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarLogoComponent } from './components/navbar/navbar-logo/navbar-logo.component';
import { NavbarTitleComponent } from './components/navbar/navbar-title/navbar-title.component';
import { Page404Component } from './pages/page404/page404.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { FlashMessageComponent } from './components/flash-message/flash-message.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    NavbarComponent,
    NavbarLogoComponent,
    NavbarTitleComponent,
    Page404Component,
    SignUpComponent,
    FlashMessageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
