import { LocalizationInterface } from './Localization.interface';

export interface EventInterface {
  address: LocalizationInterface;
  code: string;
  description: string;
  eventDate: Date;
  id: number;
  organizerAuthId: string;
  organizerEmail: string;
  organizerFirstname: string;
  organizerId: number;
  organizerLastname: string;
  participants: number[];
  title: string;
}
