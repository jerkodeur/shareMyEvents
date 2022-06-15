import { AbstractControl } from '@angular/forms';
import { DateHandler } from '../../handlers/date-handler';

export class ValidateDate {
  static isFuture(abstractControl: AbstractControl) {
    let date = abstractControl.get('date')?.value;
    let time = abstractControl.get('time')?.value;

    const fromDate = DateHandler.createDatebyDateAndTime(date, time);
    fromDate.setHours(fromDate.getHours() - 2);

    if (fromDate < new Date(Date.now())) {
      return {
        invalidDate: true,
      };
    } else {
      return null;
    }
  }
}
