import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { Page404Component } from './pages/page404/page404.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

// Events
import { CreateEventFormComponent } from './pages/create-event-form/create-event-form.component';
import { EventLayoutComponent } from './pages/event-layout/event-layout.component';

// Reset Password
import { ResetPasswordInitComponent } from './pages/reset-password/reset-password-init/reset-password-init.component';
import { ResetPasswordInstructionsComponent } from './pages/reset-password/reset-password-instructions/reset-password-instructions.component';
import { ResetPasswordPageComponent } from './pages/reset-password/reset-password-page/reset-password-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'event/:id',
    component: EventLayoutComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LogInComponent,
  },
  {
    path: 'new-event',
    component: CreateEventFormComponent,
  },
  {
    path: 'password-reset',
    component: ResetPasswordPageComponent,
  },
  {
    path: 'password-reset/init',
    component: ResetPasswordInitComponent,
  },
  {
    path: 'password-reset/instructions',
    component: ResetPasswordInstructionsComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
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
