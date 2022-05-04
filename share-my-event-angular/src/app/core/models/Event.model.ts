export class Event {
  id: number;
  title: string;
  description: string;
  date: Date;
  eventId: string;
  organizer: string;
  organizerMail: string;
  organizerId: number;
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
    organizerId: number,
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
    this.organizerId = organizerId;
    this.organizerMail = organizerMail;
    this.address = address;
    this.zipCode = zipCode;
    this.locality = locality;
    this.additional = additional;
  }

  private generateCustomId(): number {
    return Math.floor(Math.random() * 10000000000000);
  }

  private generateCustomEventId(): string {
    const alphabet = ['abcdefghijklmnopqrstuvwxyz'];

    let tempCode = '';
    tempCode += Math.floor(Math.random() * 9);
    tempCode += Math.floor(Math.random() * 9);
    tempCode += alphabet[0][Math.floor(Math.random() * 25)];
    tempCode += Math.floor(Math.random() * 9);
    tempCode += Math.floor(Math.random() * 9);
    tempCode += alphabet[0][Math.floor(Math.random() * 25)];
    tempCode += alphabet[0][Math.floor(Math.random() * 25)];
    tempCode += Math.floor(Math.random() * 9);
    return tempCode;
  }
}
