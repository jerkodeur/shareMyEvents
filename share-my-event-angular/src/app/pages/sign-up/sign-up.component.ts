import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { FlashService } from 'src/app/services/flash.service';

import { ValidatePassword } from 'src/app/shared/ValidatePassword';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent{

  submitted = false;

  constructor(private formBuilder: FormBuilder, private flashService: FlashService) {
  }

   signUpForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/), Validators.minLength(8)]],
    confirm_password: ['', [Validators.required]]
    }, {
     validator: ValidatePassword.matchPassword
   })

  get formValues(){
    return this.signUpForm.controls;
  }

  onSubmit = (): void => {
    this.submitted = true;
    if (this.signUpForm.invalid && this.signUpForm.updateOn) {
      this.flashService.flash$.next({errors:true, message: "Des erreurs ont été détectées, merci de les corriger."});
    }
    console.log(this.signUpForm.value);
  }

}
