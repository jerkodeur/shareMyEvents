export interface EventInterface {
  id: number;
  title: string;
  description: string;
  date: string;
  eventId?: string;
  organizer?: string;
  organizerMail?: string;
  address?: string;
  ZIPcode?: number;
  locality?: string;
  additionnal?: string;
}
