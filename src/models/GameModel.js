import BaseModel from './BaseModel';

class GameModel extends BaseModel {
  defaults() {
    return {
      playerOne: null,
      playerTwo: null,
      turn: "X",
      disabledX: false,
      disabledO: false,
      playerOneMove: null,
      playerTwoMove: null,
      winner: null
    };
  }

  constructor() {
    super('game');
  }
}

export default GameModel;
