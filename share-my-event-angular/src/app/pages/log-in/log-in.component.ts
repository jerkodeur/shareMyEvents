import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnDestroy {
  faEyeSlash = faEyeSlash;
  faEye = faEye;
  pwdShow: boolean = false;
  noMatch = false;
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

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  get formValues() {
    return this.loginForm.controls;
  }

  onSubmit = (): void => {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return this.notify.showError(
        'Des erreurs ont été détectées, merci de les corriger.'
      );
    }
    this.userService
      .login$({ ...this.loginForm.value })
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  };

  togglePwdType = (): void => {
    this.pwdShow = !this.pwdShow;
  };
}
