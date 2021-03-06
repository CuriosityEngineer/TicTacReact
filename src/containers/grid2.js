import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Utils from '../lib/Utils';
import TileModel from '../models/TileModel';
import GameModel from '../models/GameModel';
import Tile from '../components/tile';
import Player from '../components/player';
import Header from './header';

const bgStyle = {
    border: '3px solid transparent',
    backgroundImage: "url('http://nightowlpapergoods.com/images/D/square-5x5-cherry-print-your-own-wood-d.jpg')",
    backgroundSize: "contain",
    width: 650,
    height: 650,
}

const gridStyle = {
  border: '3px solid transparent',
  overflow:'hidden',
  textAlign: 'center',
  verticalAlign: 'middle',
  width: 400,
  marginTop: 60,
  marginLeft: 125,
};


class Grid extends React.Component {
  constructor(){
    super();

  }

  whenClickDown(index){

    if (this.props.currentP === this.props.turn){

      if (this.props.turn === "X" && this.props.modelTile.resources[index].tile === null ){
        this.props.modelTile.save(this.props.modelTile.resources[index], {tile: "X"});
        this.props.modelGame.save(this.props.modelGame.resources[0], {turn: "O"});
      }
      if (this.props.turn === "O" && this.props.modelTile.resources[index].tile === null ){
        this.props.modelTile.save(this.props.modelTile.resources[index], {tile: "O"});
        this.props.modelGame.save(this.props.modelGame.resources[0], {turn: "X"});
      }
    }
  }

  checkForWinners(){
    let tiles = this.props.modelTile.resources;
    let icon = this.props.turn;
    if (tiles[0].tile === icon && tiles[1].tile === icon && tiles[2].tile === icon ){
      setTimeout(function(){ alert('Player ' + icon + ' won!') }, 20);
      console.log("WON!");
    }
    if (tiles[3].tile === icon && tiles[4].tile === icon && tiles[5].tile === icon ){
      setTimeout(function(){ alert('Player ' + icon + ' won!') }, 20);
      console.log("WON!");
    }
    if (tiles[6].tile === icon && tiles[7].tile === icon && tiles[8].tile === icon ){
      setTimeout(function(){ alert('Player ' + icon + ' won!') }, 20);
      console.log("WON!");
    }
    if (tiles[0].tile === icon && tiles[3].tile === icon && tiles[6].tile === icon ){
      setTimeout(function(){ alert('Player ' + icon + ' won!') }, 20);
      console.log("WON!");
    }
    if (tiles[1].tile === icon && tiles[4].tile === icon && tiles[7].tile === icon ){
      setTimeout(function(){ alert('Player ' + icon + ' won!') }, 20);
      console.log("WON!");
    }
    if (tiles[2].tile === icon && tiles[5].tile === icon && tiles[8].tile === icon ){
      setTimeout(function(){ alert('Player ' + icon + ' won!') }, 20);
      console.log("WON!");
    }
    if (tiles[0].tile === icon && tiles[4].tile === icon && tiles[8].tile === icon ){
      setTimeout(function(){ alert('Player ' + icon + ' won!') }, 20);
      console.log("WON!");
    }
    if (tiles[2].tile === icon && tiles[4].tile === icon && tiles[6].tile === icon ){
      setTimeout(function(){ alert('Player ' + icon + ' won!') }, 20);
      console.log("WON!");
    }
  }

  componentDidUpdate(prevProps, prevState){;

    console.log(prevProps);
    console.log(prevState);
    // debugger;
    this.checkForWinners();
      // now the problem of 2 alerts instead of one
      // componentDidUpdate runs every change in state
      // and props after render

      // how to get it to run only once
  }

  render() {
    return (
      <div style={bgStyle}>
        <div style={gridStyle}>


          <div>
            <Player player={this.props.turn}/>
          </div>

          {this.props.modelTile.resources.map(function(tile, index){
            return(
            <Tile
            key={index}
            content={this.props.modelTile.resources[index].tile}
            onClick={this.whenClickDown.bind(this, index)}
            checkW={this.checkForWinners.bind(this)}
            />
            );
          }, this) }
          </div>
        </div>
    );
  }
}

export default Grid;
