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

    this.utils = new Utils();

    this.modelGame = new GameModel();
    this.modelGame.subscribe(this.updateGT.bind(this));

    this.modelTile = new TileModel();
    this.modelTile.subscribe(this.updateGT.bind(this));

    // this.gridState = {
    //   // tiles: [],
    //   tiles:[
    //     {content: ''},
    //     {content: ''},
    //     {content: ''},
    //     {content: ''},
    //     {content: ''},
    //     {content: ''},
    //     {content: ''},
    //     {content: ''},
    //     {content: ''},
    //   ]
    // };

    this.state = {
      turn: "",
      tiles: [],
    };
  }

  updateGT() {
    this.setState({turn: this.modelGame.resources[0].turn});
    this.setState({tiles: this.modelTile.resources});
  }

  // setupTiles(){
  //   this.modelTile.destroy(this.modelTile.resources);
  //   for(var i=0; i<9; i++){
  //     this.modelTile.addResource();
  //   }
  // }

  whenClickDown(index){

    if (this.state.turn === "X" && this.gridState.tiles[index].content === '' ){
      this.gridState.tiles[index]  = _.assign(this.gridState.tiles[index], {content: 'X',});

      this.setState({ turn: "O" });
      console.log(this.state.turn)
    }
    if (this.state.turn === "O" && this.gridState.tiles[index].content === '' ){
      this.gridState.tiles[index]  = _.assign(this.gridState.tiles[index], {content: 'O',});

      this.setState({ turn: "X" });
      console.log(this.state.turn);;
    }
    this.checkForWinners();
  }

  checkForWinners(){
    let tile = this.gridState.tiles;
    let icon = this.state.turn;
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

  render() {
    return (
        <div style={gridStyle}>
          <div>
            <Player player={this.state.turn}/>
          </div>
          {this.modelTile.resources.map(function(tile, index){
            return(
            // <Tile
            // key={index}
            // content={this.gridState.tiles[index].content}
            // onMouseDown={this.whenClickDown.bind(this, index)}
            // />
            <Tile
            key={index}
            content={this.modelTile.resources[index].tile}
            onMouseDown={this.whenClickDown.bind(this, index)}
            />
            );
          }, this) }
        </div>
    );
  }
}

export default Grid;
