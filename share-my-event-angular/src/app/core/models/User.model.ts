export class User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;

  constructor(
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ) {
    this.id = this.generateCustomId();
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
  }

  generateCustomId(): number {
    return Math.floor(Math.random() * 10000000000000);
  }
}
