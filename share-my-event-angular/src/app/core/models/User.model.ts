export class User {
  nickname: string;
  email: string;
  password: string;

  constructor(nickname: string, email: string, password: string) {
    this.nickname = nickname;
    this.email = email;
    this.password = password;
  }
}
