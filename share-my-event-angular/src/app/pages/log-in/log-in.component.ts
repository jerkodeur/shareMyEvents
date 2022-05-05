import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  faEyeSlash = faEyeSlash;
  faEye = faEye;
  pwdShow: boolean = false;
  noMatch = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private notify: NotificationService,
    private router: Router,
    private userService: UserService
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
    this.submitted = true;
    const { email, password } = this.loginForm.value;
    if (this.loginForm.invalid) {
      return this.notify.showError(
        'Des erreurs ont été détectées, merci de les corriger.'
      );
    }
    this.userService.login$(email, password).subscribe((res: any) => {
      if (!res.error) {
        this.notify.showSuccess(`Bon retour parmi nous ${res.user.lastname}`);
        this.router.navigate(['/home']);
      }
    });
  };

  togglePwdType = (): void => {
    this.pwdShow = !this.pwdShow;
  };
}
