import Game from "./game";

export default class StartGameResponse {
  public games!: Game[];
  public newGame!: Game;
}
