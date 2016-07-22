import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Tile from '../components/tile';
import Header from '../containers/header';

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

    this.gridState = {
      tiles:[
        {content: ''},
        {content: ''},
        {content: ''},
        {content: ''},
        {content: ''},
        {content: ''},
        {content: ''},
        {content: ''},
        {content: ''},
      ]
    };

    this.state = {
      turn: "X",
      // winner: false,
    };
  }



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
            <Header player={this.state.turn}/>
          </div>
          { this.gridState.tiles.map(function(tile, index){
            return(
            <Tile
            key={index}
            content={this.gridState.tiles[index].content}
            onMouseDown={this.whenClickDown.bind(this, index)}
            />
            );
          }, this) }
        </div>
    );
  }
}

export default Grid;
