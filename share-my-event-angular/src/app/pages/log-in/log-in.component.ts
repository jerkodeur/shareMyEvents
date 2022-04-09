import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

import { FlashService } from 'src/app/services/flash.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  faEyeSlash = faEyeSlash;
  faEye = faEye;
  pwdShow: boolean = false;
  submitted = false;
  noMatch = false;
  testPassword = '12345';
  testEmail = 'jerome.potie@gmail.com';

  constructor(
    private formBuilder: FormBuilder,
    private flashService: FlashService
  ) {}

  loginForm = this.formBuilder.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
      ],
    ],
    password: ['', [Validators.required]],
  });

  get formValues() {
    return this.loginForm.controls;
  }

  onSubmit = (): void => {
    this.noMatch = false;
    this.submitted = true;
    const { email, password } = this.loginForm.value;
    if (this.loginForm.invalid) {
      return this.flashService.flash$.next({
        errors: true,
        message: 'Des erreurs ont été détectées, merci de les corriger.',
      });
    } else if (
      this.loginForm.value.email !== this.testEmail ||
      this.loginForm.value.password !== this.testPassword
    ) {
      this.noMatch = true;
      this.loginForm.reset();
      this.submitted = false;
      return this.flashService.flash$.next({
        errors: true,
        message: 'Les identifiants renseignés ne sont pas valides.',
      });
    }
  };

  togglePwdType = (): void => {
    this.pwdShow = !this.pwdShow;
  };
}
