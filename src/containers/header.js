import React from 'react';
import Utils from '../lib/Utils';
import GameModel from '../models/GameModel';
import Player from '../components/player';

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

    this.utils = new Utils();

    this.modelGame = new GameModel();
    this.modelGame.subscribe(this.updateGame.bind(this));
    // console.log(this.modelGame);

    // this.setPlayer();

    this.state = {
      games: [],
    };
  }

  updateGame() {
    this.setState({games: this.modelGame.resources});

    console.log(this.modelGame.resources[1].playerOne)
  }

  // create new database and calling player one X
  setPlayerX() {
    this.modelGame.addResource({
      playerOne: "X",
    });
  }



  render() {
    return (
      <div style={headerStyle}>
        <h2>Tic Tac Toe Header</h2>
        <p></p>
        <div>
          <button style={{margin: 5}} type="button" onClick={     this.setPlayerX.bind(this) }>Join Game X</button>
          <button style={{margin: 5}} type="button" onClick={     this.updateGame.bind(this) }>Test</button>

        </div>

      </div>
    );
  }
}

export default Header;
