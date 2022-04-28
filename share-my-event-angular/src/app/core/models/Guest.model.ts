export class Guest {
  private static INC_ID = 0;
  id: number;
  name: string;
  email: string;
  username: string;
  availabilty: string = 'unknown';

  constructor(name: string, email: string) {
    this.id = this.incrementID();
    this.name = name;
    this.email = email;
    this.username = name + this.id;
  }

  private incrementID(): number {
    return ++Guest.INC_ID;
  }
}
