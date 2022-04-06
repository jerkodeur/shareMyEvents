import { UserInterface } from "../interfaces/User.interface";

export class User implements UserInterface{
  id !: number;
  username: string;
  email: string;
  password: string;

  constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
