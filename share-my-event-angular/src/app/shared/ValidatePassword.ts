import { AbstractControl } from '@angular/forms';

export class ValidatePassword {
  static MatchPassword(abstractControl: AbstractControl) {
    let password = abstractControl.get('password')?.value;
    let confirmPassword = abstractControl.get('confirm_password')?.value;
     if (password != confirmPassword) {
         abstractControl.get('confirm_password')?.setErrors({
           MatchPassword: true
         })
       return {
           MatchPassword: true
         }
    } else {
      return null
    }
  }

}
