import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatePassword } from 'src/app/shared/ValidatePassword';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  submitted = false;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {

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
    console.log(this.signUpForm.value);
    console.log(this.signUpForm.errors);
    console.log(this.signUpForm);
    console.log(this.signUpForm.valid);
  }

}
