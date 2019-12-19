export default class LogRegForm {
  public username!: string;
  public password!: string;
  public passwordConfirmation!: string;
  public email!: string;

  constructor() {
    this.username = "";
    this.password = "";
    this.passwordConfirmation = "";
    this.email = "";
  }
}
