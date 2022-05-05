export interface ParticipantInterface {
  id?: number;
  email: string;
  name: string;
  nickname?: string;
  availability: string;
  eventId: string;
}
