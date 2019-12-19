export default class GameConfiguration {
  public dropRates!: {};
  public maxCardsPerCell!: number;
  public pointsToWin!: number;
  public maxEnergy!: number;
  public numRows!: number;
  public numCols!: number;
  public numCardsInHand!: number;
  public numTerritoryRows!: number;
  public minTerritoryRow!: number;
  public energyGrowthRate!: number;
  public startingEnergy!: number;
  public resetEnergyPerTurn!: boolean;
  public isAdvanced!: boolean;

  constructor() {
    this.dropRates = {};
  }
}
