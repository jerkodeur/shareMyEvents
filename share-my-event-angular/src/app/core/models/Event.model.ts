export class Event {
  id!: number;
  title: string;
  description: string;
  date: Date;
  eventId!: string;
  organizer!: string;
  organizerMail!: string;
  address!: string;
  zipCode!: number;
  locality!: string;
  additional!: string;

  constructor(
    id: number,
    title: string,
    description: string,
    date: Date,
    event_id: string,
    organizer: string,
    organizerMail: string,
    address: string,
    zipCode: number,
    locality: string,
    additional: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.eventId = event_id;
    this.organizer = organizer;
    this.organizerMail = organizerMail;
    this.address = address;
    this.zipCode = zipCode;
    this.locality = locality;
    this.additional = additional;
  }
}
