export class Participant {
  name: string;
  email: string;
  availabilty: string = 'unknown';

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
