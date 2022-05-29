export class Participant {
  name: string;
  email: string;

  constructor({ name, email }: { name: string; email: string }) {
    this.name = name;
    this.email = email;
  }
}
