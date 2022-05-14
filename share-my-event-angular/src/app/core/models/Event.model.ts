export class Event {
  title: string;
  description: string;
  eventDate: Date;
  organizerId: string;
  street: string;
  zipCode: number;
  locality: string;
  additional: string;

  constructor(
    title: string,
    description: string,
    eventDate: Date,
    organizerId: string,
    street: string,
    zipCode: number,
    locality: string,
    additional: string
  ) {
    this.title = title;
    this.description = description;
    this.eventDate = eventDate;
    this.organizerId = organizerId;
    this.street = street;
    this.zipCode = zipCode;
    this.locality = locality;
    this.additional = additional;
  }
}
