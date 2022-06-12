import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

import { ValidatePassword } from 'src/app/core/validations/ValidatePassword';
import { ResetPassword } from 'src/app/core/models/ResetPassword.model';

import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.scss'],
})
export class ResetPasswordPageComponent {
  faEyeSlash = faEyeSlash;
  faEye = faEye;
  cfPwdShow: boolean = false;
  oldPwdShow: boolean = false;
  pwdShow: boolean = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private notify: NotificationService,
    private userService: UserService
  ) {}

  pwdForm = this.formBuilder.group(
    {
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        ],
      ],
      oldPassword: ['', [Validators.required]],
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
    this.submitted = true;

    if (this.pwdForm.invalid) {
      return this.notify.showError(
        'Des erreurs ont été détectées, merci de les corriger.'
      );
    }

    const { email, oldPassword, password: newPassword } = this.pwdForm.value;
    const resetPassword = new ResetPassword(email, oldPassword, newPassword);

    this.userService.resetPassword$(resetPassword).subscribe();
  };
  toggleOldPwdType = (): void => {
    this.oldPwdShow = !this.oldPwdShow;
  };

  togglePwdType = (): void => {
    this.pwdShow = !this.pwdShow;
  };

  toggleCfPwdType = (): void => {
    this.cfPwdShow = !this.cfPwdShow;
  };
}
