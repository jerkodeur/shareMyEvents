import { AbstractControl } from '@angular/forms';

export class ValidatePassword {
  static matchPassword(abstractControl: AbstractControl) {
    let password = abstractControl.get('password')?.value;
    let confirmPassword = abstractControl.get('confirm_password')?.value;
     if (password != confirmPassword) {
         abstractControl.get('confirm_password')?.setErrors({
           matchPassword: true
         })
       return {
           matchPassword: true
         }
    } else {
      return null
    }
  }

}
