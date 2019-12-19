import Game from './game';

export default class PutCardResponse {
  public game!: Game;
  public status!: string;
  public message!: string;
}