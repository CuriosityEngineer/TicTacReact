import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Tile from '../components/tile';

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
    };
  }



  whenClick(index){

    if (this.state.turn === "X" && this.gridState.tiles[index].content === '' ){
      this.gridState.tiles[index]  = _.assign(this.gridState.tiles[index], {content: 'X',});

      this.checkForWinners();

      console.log(this.gridState.tiles[index].content);

      this.setState({ turn: "O" });
      console.log(this.state.turn)
    }
    if (this.state.turn === "O" && this.gridState.tiles[index].content === '' ){
      this.gridState.tiles[index]  = _.assign(this.gridState.tiles[index], {content: 'O',});

      this.checkForWinners();

      console.log(this.gridState.tiles[index].content);

      this.setState({ turn: "X" });
      console.log(this.state.turn)
    }else{
      this.checkForWinners();
    }
  }

  filled(index){
    let tile = this.gridState.tiles[index];
    let empty = {content: ''}
    if (tile !== empty){
      console.log('continue');
      console.log(tile);
    }else{
      console.log('make it stop');
    }
  }

  checkForWinners(){
    let tile = this.gridState.tiles;
    let icon = this.state.turn;
    if (tile[0].content === icon && tile[1].content === icon && tile[2].content === icon ){
      // alert('Player' + icon + 'won!')
      console.log("WON!");
    }
    if (tile[3].content === icon && tile[4].content === icon && tile[5].content === icon ){
      // alert('Player' + icon + 'won!')
      console.log("WON!");
    }
    if (tile[6].content === icon && tile[7].content === icon && tile[8].content === icon ){
      // alert('Player' + icon + 'won!')
      console.log("WON!");
    }
    if (tile[0].content === icon && tile[3].content === icon && tile[6].content === icon ){
      // alert('Player' + icon + 'won!')
      console.log("WON!");
    }
    if (tile[1].content === icon && tile[4].content === icon && tile[7].content === icon ){
      // alert('Player' + icon + 'won!')
      console.log("WON!");
    }
    if (tile[2].content === icon && tile[5].content === icon && tile[8].content === icon ){
      // alert('Player' + icon + 'won!')
      console.log("WON!");
    }
    if (tile[0].content === icon && tile[4].content === icon && tile[8].content === icon ){
      // alert('Player' + icon + 'won!')
      console.log("WON!");
    }
    if (tile[2].content === icon && tile[4].content === icon && tile[6].content === icon ){
      // alert('Player' + icon + 'won!')
      console.log("WON!");
    }
  }



  render() {
    return (
        <div style={gridStyle}>
          { this.gridState.tiles.map(function(tile, index){
            return(
            <Tile
            key={index}
            content={this.gridState.tiles[index].content}
            onClick={this.whenClick.bind(this, index)}
            />
            );
          }, this) }
        </div>
    );
  }
}

export default Grid;
