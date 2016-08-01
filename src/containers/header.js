import React from 'react';
import ReactDOM from 'react-dom';
import Utils from '../lib/Utils';
import GameModel from '../models/GameModel';
import TileModel from '../models/TileModel';
import Grid2 from './grid2';
import Player from '../components/player';

const headerStyle = {
  border: '3px solid transparent',
  width: 650,
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

    this.modelTile = new TileModel();
    this.modelTile.subscribe(this.updateGame.bind(this));

    this.state = {
      games: [],
      tiles: [],
      currentPlayer: "C",
    };
  }

  updateGame() {
    console.log("Why 4 times?");
    this.setState({games: this.modelGame.resources});
    this.setState({tiles: this.modelTile.resources});
  }

  // I am player one X
  setPlayerX() {

    this.modelGame.save(this.modelGame.resources[0], {playerOne: "X"});
    setTimeout(() => {
      this.modelGame.save(this.modelGame.resources[0], {disabledX: true});
    }, 50);
    this.showGrid();

    if (this.state.currentPlayer === "C"){
      this.setState({currentPlayer: "X"});
    }else{
      return alert("You already have chosen your role, " + this.state.currentPlayer);
    }
  }

  // I am player two O
  setPlayerO(){

    this.modelGame.save(this.modelGame.resources[0], {playerTwo: "O"});
    setTimeout(() => {
      this.modelGame.save(this.modelGame.resources[0], {disabledO: true});
    }, 50);
    this.showGrid();

    if (this.state.currentPlayer === "C"){
      this.setState({currentPlayer: "O"});
    }else{
      return alert("You already have chosen your role: " + this.state.currentPlayer);
    }
  }

  showGrid(){
    let resourceX = this.modelGame.resources[0].disabledX
    let resourceO = this.modelGame.resources[0].disabledO
    if (resourceX === false && resourceO === false){
      return <div style={joinStatus}>Choose X or O</div>
    }
    if (resourceX === true && resourceO === true){
      return <Grid2
        currentP={this.state.currentPlayer}
        tiles={this.modelTile.resources.tiles}
        modelTile={this.modelTile}
        modelGame={this.modelGame}
        turn={this.modelGame.resources[0].turn}
        reset={this.resetGame}/>
    }
    else {
      if (this.state.currentPlayer === "C"){
        return <div style={joinStatus}>Waiting for a second player.<br/> Join the game!</div>
      }else{
        return <div style={joinStatus}>Waiting for a second player.<br/> You are {this.state.currentPlayer}</div>
      }
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

    this.setState({currentPlayer: "C"});


    this.setupTiles();
  }

  setupTiles(){
    this.modelTile.destroy(this.modelTile.resources);
    for(var i=0; i<9; i++){
      this.modelTile.addResource();
    }
  }

  testYo(){

    console.log(this.modelGame.resources[0].turn);

    console.log(this.state.currentPlayer);

    console.log(this.modelGame.resources[0].disabledX);
    console.log(this.modelGame.resources[0].disabledO);
  }

  render() {
    return (
      <div>
      <div style={headerStyle}>
        <h2>Tic Tac Insect</h2>
        <div>
          <button
          style={{margin: 5}}
          type="button"
          onClick={this.testYo.bind(this)}>testing stuffz
          </button>
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
        </div>
      </div>
      {console.log(this.modelGame.resources[0].turn)}
      {this.showGrid()}
      </div>
    );
  }
}

export default Header;
