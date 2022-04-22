import { HomeComponent } from './pages/home/home.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { NgModule } from '@angular/core';
import { Page404Component } from './pages/page404/page404.component';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ResetPasswordInitComponent } from './pages/reset-password/reset-password-init/reset-password-init.component';
import { ResetPasswordInstructionsComponent } from './pages/reset-password/reset-password-instructions/reset-password-instructions.component';
import { ResetPasswordPageComponent } from './pages/reset-password/reset-password-page/reset-password-page.component';
import { CreateEventFormComponent } from './pages/create-event-form/create-event-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'new-event',
    component: CreateEventFormComponent,
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
    path: 'signup',
    component: SignUpComponent,
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
    path: 'password-reset',
    component: ResetPasswordPageComponent,
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
