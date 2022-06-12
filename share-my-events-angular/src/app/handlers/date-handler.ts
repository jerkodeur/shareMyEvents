export class DateHandler {
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
    return new Date(Date.UTC(year, month - 1, day, hours, minutes, 0));
  }

  static splitDateObject(dateObj: Date): {
    date: string;
    time: string;
    shortDateFr: string;
    shortDateEn: string;
    shortTime: string;
  } {
    const date = dateObj.toLocaleDateString('fr-FR', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    const time = dateObj.toLocaleTimeString('fr-FR', {
      hour: 'numeric',
      minute: 'numeric',
      second: '2-digit',
    });
    const shortTime = dateObj.toLocaleTimeString().slice(0, 5);
    const shortDate = dateObj.toLocaleDateString().split('/');
    const shortDateFr = shortDate.join('-');
    const shortDateEn = `${shortDate[2]}-${shortDate[1]}-${shortDate[0]}`;
    return { date, time, shortDateFr, shortDateEn, shortTime };
  }
}
