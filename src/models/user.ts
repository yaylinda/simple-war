export default class User {
  public username!: string;
  public sessionToken!: string;
  public isGuest!: boolean;

  constructor() {
    this.username = "";
    this.sessionToken = "";
    this.isGuest = false;
  }
}