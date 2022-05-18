export class Participant {
  id: number;
  name: string;
  email: string;
  nickname: string;
  availabilty: string = 'unknown';
  eventId: number;

  constructor(name: string, email: string, eventId: number) {
    this.id = this.generateCustomId();
    this.name = name;
    this.email = email;
    this.nickname = name + this.id;
    this.eventId = eventId;
  }

  private generateCustomId(): number {
    return Math.floor(Math.random() * 10000000000000);
  }
}
