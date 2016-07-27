import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Utils from '../lib/Utils';
import TileModel from '../models/TileModel';
import GameModel from '../models/GameModel';
import Tile from '../components/tile';
import Player from '../components/player';
import Header from './header';

const gridStyle = {
  border: '3px solid red',
  overflow:'hidden',
  width: 470,
  textAlign: 'center',
  verticalAlign: 'middle',
};

class Grid extends React.Component {
  constructor(){
    super();

    // this.utils = new Utils();

    // this.modelGame = new GameModel();
    // this.modelGame.subscribe(this.updateGT.bind(this));
    //
    // this.modelTile = new TileModel();
    // this.modelTile.subscribe(this.updateGT.bind(this));

    // this.state = {
    //   turn: "",
    //   tiles: [],
    // };
  }

  // updateGT() {
  //   this.setState({turn: this.modelGame.resources[0].turn});
  //   this.setState({tiles: this.modelTile.resources});
  // }

  whenClickDown(index){

    if (this.props.turn === "X" && this.props.tiles[index].tile === null ){
      this.props.modelTile.save(this.props.modelTile.resources[index], {tile: "X"});
      this.props.modelGame.save(this.props.modelGame.resources[0], {turn: "O"});
    }
    if (this.props.turn === "O" && this.props.tiles[index].tile === null ){
      this.props.modelTile.save(this.props.modelTile.resources[index], {tile: "O"});
      this.props.modelGame.save(this.props.modelGame.resources[0], {turn: "X"});
    }
    // this.checkForWinners();
  }

  checkForWinners(){
    let tile = this.props.tiles;
    let icon = this.props.turn;
    if (tile[0].content === icon && tile[1].content === icon && tile[2].content === icon ){
      console.log("WON!");
      setTimeout(function(){ alert('Player ' + icon + ' won!') }, 100);
    }
    if (tile[3].content === icon && tile[4].content === icon && tile[5].content === icon ){
      setTimeout(function(){ alert('Player ' + icon + ' won!') }, 100);
      console.log("WON!");
    }
    if (tile[6].content === icon && tile[7].content === icon && tile[8].content === icon ){
      setTimeout(function(){ alert('Player ' + icon + ' won!') }, 100);
      console.log("WON!");
    }
    if (tile[0].content === icon && tile[3].content === icon && tile[6].content === icon ){
      setTimeout(function(){ alert('Player ' + icon + ' won!') }, 100);
      console.log("WON!");
    }
    if (tile[1].content === icon && tile[4].content === icon && tile[7].content === icon ){
      setTimeout(function(){ alert('Player ' + icon + ' won!') }, 100);
      console.log("WON!");
    }
    if (tile[2].content === icon && tile[5].content === icon && tile[8].content === icon ){
      setTimeout(function(){ alert('Player ' + icon + ' won!') }, 100);
      console.log("WON!");
    }
    if (tile[0].content === icon && tile[4].content === icon && tile[8].content === icon ){
      setTimeout(function(){ alert('Player ' + icon + ' won!') }, 100);
      console.log("WON!");
    }
    if (tile[2].content === icon && tile[4].content === icon && tile[6].content === icon ){
      setTimeout(function(){ alert('Player ' + icon + ' won!') }, 100);
      console.log("WON!");
    }
    // console.log(this.state.winner);
  }

  testYo2(){
    console.log(this.props.tiles);
    console.log(this.props.turn);
  }

  render() {
    return (
        <div style={gridStyle}>
          <div>
            <Player player={this.props.turn}/>
            <button
            style={{margin: 5}}
            type="button"
            onClick={this.testYo2.bind(this)}>Test Yo 2!
            </button>
          </div>
          {this.props.modelTile.resources.map(function(tile, index){
            return(
            // <Tile
            // key={index}
            // content={this.gridState.tiles[index].content}
            // onMouseDown={this.whenClickDown.bind(this, index)}
            // />
            <Tile
            key={index}
            content={this.props.modelTile.resources[index].tile}
            onMouseDown={this.whenClickDown.bind(this, index)}
            />
            );
          }, this) }
        </div>
    );
  }
}

export default Grid;
