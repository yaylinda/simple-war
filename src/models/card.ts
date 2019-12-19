export default class Card {
  public id!: string;
  public owner!: string;
  public type!: string;
  public might!: number;
  public movement!: number;
  public movementDirection!: string;
  public cost!: number;
  public clicked!: boolean;
  public justDrew!: boolean;
  public numTurnsOnBoard!: number;

  constructor(card: Card) {
    this.id = card.id;
    this.owner = card.owner;
    this.type = card.type;
    this.might = card.might;
    this.movement = card.movement;
    this.movementDirection = card.movementDirection;
    this.cost = card.cost;
    this.clicked = card.clicked;
    this.justDrew = card.justDrew;
    this.numTurnsOnBoard = card.numTurnsOnBoard;
  }
}