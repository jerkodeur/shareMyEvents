import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { ValidatePassword } from 'src/app/core/validations/ValidatePassword';

import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

import { User } from 'src/app/core/models/User.model';

import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnDestroy {
  faEyeSlash = faEyeSlash;
  faEye = faEye;
  pwdShow: boolean = false;
  cfPwdShow: boolean = false;
  submitted = false;

  private readonly destroy$: Subject<void> = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    private notify: NotificationService,
    private userService: UserService
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  signUpForm = this.formBuilder.group(
    {
      nickname: ['', [Validators.required, Validators.minLength(2)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        ],
      ],
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
    return this.signUpForm.controls;
  }

  onSubmit = (): void => {
    this.submitted = true;
    if (this.signUpForm.invalid) {
      return this.notify.showError(
        'Des erreurs ont été détectées, merci de les corriger.'
      );
    }
    const { nickname, email, password } = this.signUpForm.value;
    const newUser = new User(nickname, email, password);
    this.userService
      .signup$(newUser)
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  };

  togglePwdType = (): void => {
    this.pwdShow = !this.pwdShow;
  };

  toggleCfPwdType = (): void => {
    this.cfPwdShow = !this.cfPwdShow;
  };
}
