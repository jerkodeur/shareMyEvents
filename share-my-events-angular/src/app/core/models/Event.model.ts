import { LocalizationInterface } from '../interfaces/Localization.interface';

export class Event {
  title: string;
  description: string;
  eventDate: Date;
  organizerId: string;
  address: LocalizationInterface;

  constructor(
    title: string,
    description: string,
    eventDate: Date,
    organizerId: string,
    address: LocalizationInterface
  ) {
    this.title = title;
    this.description = description;
    this.eventDate = eventDate;
    this.organizerId = organizerId;
    this.address = address;
  }
}
