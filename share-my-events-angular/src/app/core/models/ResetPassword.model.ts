export class ResetPassword {
  private email: string;
  private oldPassword: string;
  private newPassword: string;

  constructor(email: string, oldPassword: string, newPassword: string) {
    this.email = email;
    this.oldPassword = oldPassword;
    this.newPassword = newPassword;
  }
}
