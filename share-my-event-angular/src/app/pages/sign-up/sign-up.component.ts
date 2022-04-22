import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

import { ValidatePassword } from 'src/app/shared/ValidatePassword';
import { FlashService } from 'src/app/services/flash.service';

import { User } from 'src/app/core/models/User.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  faEyeSlash = faEyeSlash;
  faEye = faEye;
  pwdShow: boolean = false;
  cfPwdShow: boolean = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private flashService: FlashService
  ) {}

  signUpForm = this.formBuilder.group(
    {
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
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
      return this.flashService.flash$.next({
        errors: true,
        message: 'Des erreurs ont été détectées, merci de les corriger.',
      });
    }
    const { firstname, lastname, email, password } = this.signUpForm.value;
    const newUser = new User(firstname, lastname, email, password);
    console.log(newUser);
  };

  togglePwdType = (): void => {
    this.pwdShow = !this.pwdShow;
  };

  toggleCfPwdType = (): void => {
    this.cfPwdShow = !this.cfPwdShow;
  };
}
