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
import { EventAsideInfoComponent } from './components/event/event-aside-info/event-aside-info.component';
import { EventDescriptionComponent } from './components/event/event-description/event-description.component';
import { EventGuestListComponent } from './components/event/event-guest-list/event-guest-list.component';
import { EventIdComponent } from './components/event/event-id/event-id.component';
import { EventLayoutComponent } from './pages/event-layout/event-layout.component';
import { EventLocalizationComponent } from './components/event/event-localization/event-localization.component';
import { EventMobileMenuComponent } from './components/event/event-mobile-menu/event-mobile-menu.component';
import { EventTitleComponent } from './components/event/event-title/event-title.component';
import { StatusModifierComponent } from './components/event/event-mobile-menu/status-modifier/status-modifier.component';

// Navbar components
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarLogoComponent } from './components/navbar/navbar-logo/navbar-logo.component';
import { NavbarTitleComponent } from './components/navbar/navbar-title/navbar-title.component';

// Reset password components
import { ResetPasswordPageComponent } from './pages/reset-password/reset-password-page/reset-password-page.component';
import { ResetPasswordInitComponent } from './pages/reset-password/reset-password-init/reset-password-init.component';
import { ResetPasswordInstructionsComponent } from './pages/reset-password/reset-password-instructions/reset-password-instructions.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEventFormComponent,
    EventAsideInfoComponent,
    EventDescriptionComponent,
    EventGuestListComponent,
    EventIdComponent,
    EventLayoutComponent,
    EventLocalizationComponent,
    EventMobileMenuComponent,
    EventTitleComponent,
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
    StatusModifierComponent,
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
