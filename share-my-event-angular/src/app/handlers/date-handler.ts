export class DateHandler {
  constructor() {}

  static addHoursToDate(date: Date, hours: number): Date {
    return new Date(new Date(date).setHours(date.getHours() + hours));
  }

  static validateExpirationDate(refDate: Date, hours: number): boolean {
    const dateNow = new Date(Date.now());
    const compareDate = this.addHoursToDate(refDate, hours);
    return compareDate > dateNow;
  }

  static createDatebyDateAndTime(date: any, time: any) {
    let splitDate = date.split('-');
    let splitTime = time.split(':');

    const [year, month, day] = splitDate;
    const [hours, minutes] = splitTime;

    return new Date(year, month - 1, day, hours, minutes);
  }
}
