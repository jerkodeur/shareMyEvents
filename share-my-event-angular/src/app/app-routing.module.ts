import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { LogOutComponent } from './pages/log-out/log-out.component';
import { Page404Component } from './pages/page404/page404.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

// Events
import { CreateEventFormComponent } from './pages/create-event-form/create-event-form.component';
import { EventLayoutComponent } from './pages/event-layout/event-layout.component';

// Reset Password
import { ResetPasswordInitComponent } from './pages/reset-password/reset-password-init/reset-password-init.component';
import { ResetPasswordInstructionsComponent } from './pages/reset-password/reset-password-instructions/reset-password-instructions.component';
import { ResetPasswordPageComponent } from './pages/reset-password/reset-password-page/reset-password-page.component';

// Guards
import { AuthenticatedGuard } from './core/guards/authenticated.guard';
import { UnauthenticatedGuard } from './core/guards/unauthenticated.guard';
import { OrganizerGuard } from './core/guards/organizer.guard';
import { ParticipantGuard } from './core/guards/participant.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'events/:id',
    component: EventLayoutComponent,
    canActivate: [ParticipantGuard || OrganizerGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LogInComponent,
    canActivate: [UnauthenticatedGuard],
  },
  {
    path: 'logout',
    component: LogOutComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'new-event',
    component: CreateEventFormComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'password-reset',
    component: ResetPasswordPageComponent,
    canActivate: [UnauthenticatedGuard],
  },
  {
    path: 'password-reset/init',
    component: ResetPasswordInitComponent,
    canActivate: [UnauthenticatedGuard],
  },
  {
    path: 'password-reset/instructions',
    component: ResetPasswordInstructionsComponent,
    canActivate: [UnauthenticatedGuard],
  },
  {
    path: 'signup',
    component: SignUpComponent,
    canActivate: [UnauthenticatedGuard],
  },
  {
    path: '**',
    component: Page404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
