import React from 'react';
import GameModel from '../models/GameModel';

const headerStyle = {
  border: '3px solid blue',
  width: 470,
  height: 100,
  paddingTop: 25,
  textAlign: 'center',
};

class Header extends React.Component {
  constructor(){
    super();

    this.modelGame = new GameModel();

      // this.setPlayerX();
      // this.setPlayerO();
  }

  // setPlayerX() {
  //   this.modelGame.addResource({
  //     playerOne: "X",
  //   });
  // }
  //
  // setPlayerO() {
  //   this.modelGame.updateResource({
  //     playerOne: "O",
  //   });
  // }
  // <button style={{margin: 5}} type="button" onClick={     this.updatePlayerX.bind(this) }>Join Game X</button>
  // <button style={{margin: 5}} type="button" onClick={ this.destroyPlayerO.bind(this) }>Join Game O</button>

  render() {
    return (
      <div style={headerStyle}>
      <p>Tic Tac Toe Header</p>
      </div>
    );
  }
}

export default Header;
