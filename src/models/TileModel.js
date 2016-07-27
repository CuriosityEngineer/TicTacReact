import BaseModel from './BaseModel';

class TileModel extends BaseModel {
  defaults() {
    return {
      tile: null,
    };
  }

  constructor() {
    super('tile');
  }
}

export default TileModel;
