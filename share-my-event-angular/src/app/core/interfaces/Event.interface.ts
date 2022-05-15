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
  street: string;
  zipCode: string;
  locality: string;
  additional: string;
}
