import React from 'react';
import ReactDOM from 'react-dom';
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

    this.state = {
      games: [],
    };
  }

  updateGame() {
    this.setState({games: this.modelGame.resources});
  }

  // I am player one X
  setPlayerX() {
    this.modelGame.save(this.modelGame.resources[0], {playerOne: "X"});
  }

  // I am player two O
  setPlayerO(){
    this.modelGame.save(this.modelGame.resources[0], {playerTwo: "O"});

    console.log(this.modelGame.resources[0].playerTwo);
  }

  // reset the values of the game
  resetGame(){
    // delete the old game
    this.modelGame.destroy(this.modelGame.resources[0]);
    // create a new game
    this.modelGame.addResource();
  }

  render() {
    return (
      <div style={headerStyle}>
        <h2>Tic Tac Toe Header</h2>
        <p></p>
        <div>
          <button style={{margin: 5}} type="button" onClick={     this.setPlayerX.bind(this) }>Join Game X</button>
          <button style={{margin: 5}} type="button" onClick={     this.resetGame.bind(this) }>New</button>
          <button style={{margin: 5}} type="button" onClick={     this.setPlayerO.bind(this) }>Join Game O</button>

        </div>

      </div>
    );
  }
}

export default Header;
