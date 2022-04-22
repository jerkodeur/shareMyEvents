import { AbstractControl } from '@angular/forms';

export class ValidateDate {
  static isFuture(abstractControl: AbstractControl) {
    let splitDate = abstractControl.get('date')?.value.toString().split('-');
    let splitTime = abstractControl.get('time')?.value.toString().split(':');

    const [year, month, day] = splitDate;
    const [hours, minutes] = splitTime;

    const fromDate = new Date(year, month - 1, day, hours, minutes, 0);

    if (fromDate < new Date(Date.now())) {
      return {
        invalidDate: true,
      };
    } else {
      return null;
    }
  }
}
