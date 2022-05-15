import { LocalizationInterface } from './Localization.interface';

export interface EventInterface {
  id: number;
  title: string;
  description: string;
  code: string;
  eventDate: Date;
  organizerAuthId: string;
  organizerEmail: string;
  organizerFirstname: string;
  organizerLastname: string;
  address: LocalizationInterface;
}
