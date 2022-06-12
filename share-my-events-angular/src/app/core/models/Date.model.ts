export class FullDate {
  constructor() {}

  static getCurrentDate(): string {
    const dateNow = new Date();
    const year = dateNow.getUTCFullYear();
    const month = (dateNow.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = dateNow.getUTCDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  static getCurrentFullDate(): Date {
    return new Date();
  }
}
