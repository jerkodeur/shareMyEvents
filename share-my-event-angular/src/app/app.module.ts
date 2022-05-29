import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { CguComponent } from './components/cgu/cgu.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { LogOutComponent } from './pages/log-out/log-out.component';
import { ModalComponent } from './components/modal/modal.component';
import { Page404Component } from './pages/page404/page404.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

// Event components
import { CreateEventFormComponent } from './pages/create-event-form/create-event-form.component';
import { EventAsideInfoComponent } from './components/event/event-aside-info/event-aside-info.component';
import { EventAsideInfoFormComponent } from './components/event/event-aside-info/event-aside-info-form/event-aside-info-form.component';
import { EventDescriptionComponent } from './components/event/event-description/event-description.component';
import { EventDescriptionFormComponent } from './components/event/event-description/event-description-form/event-description-form.component';
import { EventIdComponent } from './components/event/event-id/event-id.component';
import { EventLayoutComponent } from './pages/event-layout/event-layout.component';
import { EventLocalizationFormComponent } from './components/event/event-localization/event-localization-form/event-localization-form.component';
import { EventLocalizationComponent } from './components/event/event-localization/event-localization.component';
import { EventMobileMenuComponent } from './components/event/event-mobile-menu/event-mobile-menu.component';
import { EventTitleComponent } from './components/event/event-title/event-title.component';
import { EventTitleFormComponent } from './components/event/event-title/event-title-form/event-title-form.component';
import { StatusModifierComponent } from './components/event/event-mobile-menu/status-modifier/status-modifier.component';

// Navbar components
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarLogoComponent } from './components/navbar/navbar-logo/navbar-logo.component';
import { NavbarTitleComponent } from './components/navbar/navbar-title/navbar-title.component';

// Reset password components
import { ResetPasswordPageComponent } from './pages/reset-password/reset-password-page/reset-password-page.component';
import { ResetPasswordInitComponent } from './pages/reset-password/reset-password-init/reset-password-init.component';
import { ResetPasswordInstructionsComponent } from './pages/reset-password/reset-password-instructions/reset-password-instructions.component';

// Participant components
import { AddParticipantFormComponent } from './components/event/event-participant-list/add-participant-form/add-participant-form.component';
import { EventParticipantListComponent } from './components/event/event-participant-list/event-participant-list.component';
import { ParticipantStatusComponent } from './components/event/event-participant-list/participant-status/participant-status.component';

// Home
import { HomeComponent } from './pages/home/home.component';
import { HomeEventCreateComponent } from './components/home/home-event-create/home-event-create.component';
import { HomeEventJoinFormComponent } from './components/home/home-event-join-form/home-event-join-form.component';
import { OrganizerNextEventsComponent } from './components/home/organizer-next-events/organizer-next-events.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}
@NgModule({
  declarations: [
    AddParticipantFormComponent,
    AppComponent,
    CreateEventFormComponent,
    EventAsideInfoComponent,
    EventAsideInfoFormComponent,
    EventDescriptionComponent,
    EventDescriptionFormComponent,
    EventIdComponent,
    EventLayoutComponent,
    EventLocalizationComponent,
    EventLocalizationFormComponent,
    EventMobileMenuComponent,
    EventParticipantListComponent,
    EventTitleFormComponent,
    EventTitleComponent,
    HomeComponent,
    HomeEventCreateComponent,
    HomeEventJoinFormComponent,
    LogInComponent,
    LogOutComponent,
    NavbarComponent,
    NavbarLogoComponent,
    NavbarTitleComponent,
    Page404Component,
    ParticipantStatusComponent,
    ResetPasswordInitComponent,
    ResetPasswordInstructionsComponent,
    ResetPasswordPageComponent,
    SignUpComponent,
    StatusModifierComponent,
    OrganizerNextEventsComponent,
    ModalComponent,
    FooterComponent,
    CguComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    EditorModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [`${environment.apiBaseUrl}`],
        disallowedRoutes: [
          `${environment.apiUrl}/users/login`,
          `${environment.apiUrl}/users/signup`,
        ],
      },
    }),
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
