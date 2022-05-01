export class Event {
  id: number;
  title: string;
  description: string;
  date: Date;
  eventId: string;
  organizer: string;
  organizerMail: string;
  address: string;
  zipCode: number;
  locality: string;
  additional: string;

  constructor(
    title: string,
    description: string,
    date: Date,
    organizer: string,
    organizerMail: string,
    address: string,
    zipCode: number,
    locality: string,
    additional: string
  ) {
    this.id = this.generateCustomId();
    this.title = title;
    this.description = description;
    this.date = date;
    this.eventId = this.generateCustomEventId();
    this.organizer = organizer;
    this.organizerMail = organizerMail;
    this.address = address;
    this.zipCode = zipCode;
    this.locality = locality;
    this.additional = additional;
  }

  generateCustomId(): number {
    return Math.floor(Math.random() * 10000000000000);
  }

  generateCustomEventId(): string {
    const alphabet = ['abcdefghijklmnopqrstuvwxyz'];
    const randomNumber = Math.floor(Math.random() * 9);
    const randomLetterPos = Math.floor(Math.random() * 25);
    let tempCode = '';
    tempCode += randomNumber;
    tempCode += randomNumber;
    tempCode += alphabet[0][randomLetterPos];
    tempCode += randomNumber;
    tempCode += randomNumber;
    tempCode += alphabet[0][randomLetterPos];
    tempCode += alphabet[0][randomLetterPos];
    tempCode += randomNumber;
    return tempCode;
  }
}
