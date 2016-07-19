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
  }


  setPlayerX() {
    this.modelGame.addResource({
      playerOne: "TestConnection",
    });
  }

  render() {
    return (
      <div style={headerStyle}>
        <button style={{margin: 5}} type="button" onClick={ this.setPlayerX.bind(this) }>Join Game X</button>
        <button style={{margin: 5}} type="button" onClick={ this.setPlayerX.bind(this) }>Join Game O</button>

      </div>
    );
  }
}

export default Header;
