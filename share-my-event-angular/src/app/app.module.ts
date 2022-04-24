import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlashMessageComponent } from './components/flash-message/flash-message.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { Page404Component } from './pages/page404/page404.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

// Event components
import { CreateEventFormComponent } from './pages/create-event-form/create-event-form.component';
import { EventLayoutComponent } from './pages/event-layout/event-layout.component';
import { EventDateComponent } from './components/event/event-date/event-date.component';
import { EventMainInfoComponent } from './components/event/event-main-info/event-main-info.component';
import { EventLocalizationComponent } from './components/event/event-localization/event-localization.component';
import { EventGuestListComponent } from './components/event/event-guest-list/event-guest-list.component';
import { EventFooterMenuComponent } from './components/event/event-footer-menu/event-footer-menu.component';
import { EventCancelComponent } from './components/event/event-cancel/event-cancel.component';

// Navbar components
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarLogoComponent } from './components/navbar/navbar-logo/navbar-logo.component';
import { NavbarTitleComponent } from './components/navbar/navbar-title/navbar-title.component';

// Reset password components
import { ResetPasswordInitComponent } from './pages/reset-password/reset-password-init/reset-password-init.component';
import { ResetPasswordInstructionsComponent } from './pages/reset-password/reset-password-instructions/reset-password-instructions.component';
import { ResetPasswordPageComponent } from './pages/reset-password/reset-password-page/reset-password-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEventFormComponent,
    FlashMessageComponent,
    LogInComponent,
    NavbarComponent,
    NavbarLogoComponent,
    NavbarTitleComponent,
    Page404Component,
    ResetPasswordInitComponent,
    ResetPasswordInstructionsComponent,
    ResetPasswordPageComponent,
    SignUpComponent,
    EventLayoutComponent,
    EventDateComponent,
    EventMainInfoComponent,
    EventLocalizationComponent,
    EventGuestListComponent,
    EventFooterMenuComponent,
    EventCancelComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    EditorModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
