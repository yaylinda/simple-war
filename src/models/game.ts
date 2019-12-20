import Cell from "./cell";
import Card from "./card";
import GameStats from "./game-stats";
import GameConfiguration from "./game-configuration";

export default class Game {
  public id!: string;
  public username!: string;
  public opponentName!: string;
  public board!: Cell[][];
  public transitionBoard!: Cell[][];
  public previousBoard!: Cell[][];
  public cards!: Card[];
  public currentTurn!: boolean;
  public points!: number;
  public energy!: number;
  public status!: string;
  public opponentPoints!: number;
  public md5Hash!: string;
  public createdDate!: string;
  public lastModifiedDate!: string;
  public player2JoinDate!: string;
  public completedDate!: string;
  public winner!: string;
  public gameStats!: GameStats;
  public endzone!: Card[];
  public opponentEndzone!: Card[];
  public gameConfiguration!: GameConfiguration;
  public currentTimestamp!: string;
  public isAi!: boolean;

  constructor() {
    this.id = "";
    this.username = "";
    this.opponentName = "";
    this.board = [[]];
    this.transitionBoard = [[]];
    this.previousBoard = [[]];
    this.cards = [];
    this.currentTurn = false;
    this.points = -1;
    this.energy = -1;
    this.status = "";
    this.opponentPoints = -1;
    this.md5Hash = "";
    this.createdDate = "";
    this.lastModifiedDate = "";
    this.player2JoinDate = "";
    this.completedDate = "";
    this.winner = "";
    this.gameStats = new GameStats();
    this.endzone = [];
    this.opponentEndzone = [];
    this.gameConfiguration = new GameConfiguration();
    this.currentTimestamp = "";
    this.isAi = false;
  }
}
