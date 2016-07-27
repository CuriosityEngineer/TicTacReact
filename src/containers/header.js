import React from 'react';
import ReactDOM from 'react-dom';
import Utils from '../lib/Utils';
import GameModel from '../models/GameModel';
import Grid2 from './grid2';
import Player from '../components/player';

const headerStyle = {
  border: '3px solid blue',
  width: 470,
  height: 100,
  paddingTop: 25,
  textAlign: 'center',
};

const joinStatus = {
  width: 470,
  height: 100,
  textAlign: 'center',
  paddingTop: 25,
}

class Header extends React.Component {
  constructor(){
    super();

    this.utils = new Utils();

    this.modelGame = new GameModel();
    this.modelGame.subscribe(this.updateGame.bind(this));

    this.state = {
      games: [],
      // disabledX: [],
      // disabledO: [],
    };
  }

  updateGame() {
    this.setState({games: this.modelGame.resources});
    // this.setState({disabledX: this.modelGame.resources[0].disabledX});
    // this.setState({disabledO: this.modelGame.resources[0].disabledO});

  }

  // I am player one X
  setPlayerX() {
    this.modelGame.save(this.modelGame.resources[0], {playerOne: "X"});
    setTimeout(() => {
      this.modelGame.save(this.modelGame.resources[0], {disabledX: true});
    }, 50);
    this.showGrid();
  }

  // I am player two O
  setPlayerO(){
    this.modelGame.save(this.modelGame.resources[0], {playerTwo: "O"});
    setTimeout(() => {
      this.modelGame.save(this.modelGame.resources[0], {disabledO: true});
    }, 50);
    this.showGrid();
  }

  showGrid(){
    if (this.modelGame.resources[0].disabledX === false && this.modelGame.resources[0].disabledO === true){
      return <div style={joinStatus}>You are player O and waiting for other player</div>
    }
    if (this.modelGame.resources[0].disabledX === true && this.modelGame.resources[0].disabledO === false){
      return <div style={joinStatus}>You are player X and waiting for other player</div>
    }
    if (this.modelGame.resources[0].disabledX === true && this.modelGame.resources[0].disabledO === true){
      return <Grid2/>
    }
    else {
      return <div style={joinStatus}>Choose X or O</div>
    }
  }

  // reset the values of the game
  resetGame(){
    // delete the old game
    this.modelGame.destroy(this.modelGame.resources[0]);
    // create a new game
    this.modelGame.addResource();

    this.modelGame.save(this.modelGame.resources[0], {disabledX: false});
    this.modelGame.save(this.modelGame.resources[0], {disabledO: false});
  }

  testYo(){
    console.log(this.modelGame.resources[0].playerOne);
    console.log(this.modelGame.resources[0].playerTwo);

    console.log(this.modelGame.resources[0].disabledX);
    console.log(this.modelGame.resources[0].disabledO);
  }

  render() {
    return (
      <div>
      <div style={headerStyle}>
        <h2>Tic Tac Toe Header</h2>
        <p></p>
        <div>
          <button
          style={{margin: 5}}
          type="button"
          onClick={this.setPlayerX.bind(this)}
          disabled={this.modelGame.resources[0].disabledX}>Join Game X
          </button>
          <button
          style={{margin: 5}}
          type="button"
          onClick={this.resetGame.bind(this) }>New
          </button>
          <button
          style={{margin: 5}}
          type="button"
          onClick={this.setPlayerO.bind(this)} disabled={this.modelGame.resources[0].disabledO}>Join Game O
          </button>
          <button
          style={{margin: 5}}
          type="button"
          onClick={this.testYo.bind(this)}>Test Yo!
          </button>
        </div>
      </div>
      {this.showGrid()}
      </div>
    );
  }
}

export default Header;
