import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateHandlerService {
  constructor() {}

  addHoursToDate(date: Date, hours: number): Date {
    return new Date(new Date(date).setHours(date.getHours() + hours));
  }

  validateExpirationDate(refDate: Date, hours: number): boolean {
    const dateNow = new Date(Date.now());
    const compareDate = this.addHoursToDate(refDate, hours);
    return compareDate > dateNow;
  }
}
