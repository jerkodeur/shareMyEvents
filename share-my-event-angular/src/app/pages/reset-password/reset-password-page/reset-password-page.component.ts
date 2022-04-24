import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

import { DateHandler } from 'src/app/handlers/date-handler';
import { FlashService } from 'src/app/services/flash.service';
import { ValidatePassword } from 'src/app/shared/ValidatePassword';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.scss'],
})
export class ResetPasswordPageComponent {
  faEyeSlash = faEyeSlash;
  faEye = faEye;
  pwdShow: boolean = false;
  cfPwdShow: boolean = false;
  noMatch = false;
  submitted = false;
  testValidDate = new Date(Date.now());
  testCode = '12345';

  constructor(
    private formBuilder: FormBuilder,
    private flashService: FlashService,
    private router: Router
  ) {}

  pwdForm = this.formBuilder.group(
    {
      code: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
          ),
          Validators.minLength(8),
        ],
      ],
      confirm_password: ['', [Validators.required]],
    },
    {
      validator: ValidatePassword.matchPassword,
    }
  );

  get formValues() {
    return this.pwdForm.controls;
  }

  onSubmit = (): void => {
    const currentDate = new Date(Date.now());
    this.noMatch = false;
    this.submitted = true;
    const { code, password, confirm_password } = this.pwdForm.value;
    if (!DateHandler.validateExpirationDate(currentDate, 0)) {
      this.router.navigate([
        'password-reset/init',
        { exception: 'codeExpired' },
      ]);
    } else if (this.pwdForm.invalid) {
      return this.flashService.flash$.next({
        errors: true,
        message: 'Des erreurs ont été détectées, merci de les corriger.',
      });
    } else if (code !== this.testCode) {
      this.noMatch = true;
      this.pwdForm.reset();
      this.submitted = false;
      return this.flashService.flash$.next({
        errors: true,
        message: 'Le code renseigné est invalide.',
      });
    }
  };

  togglePwdType = (): void => {
    this.pwdShow = !this.pwdShow;
  };

  toggleCfPwdType = (): void => {
    this.cfPwdShow = !this.cfPwdShow;
  };
}
