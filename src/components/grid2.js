import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Tile from '../components/tile';

const gridStyle = {
  border: '3px solid red',
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
      content: "something",
    };
  }

  whenClick(index){
    if (this.state.turn === "X"){
      this.gridState.tiles[index]  = _.assign(this.gridState.tiles[index], {content: 'X',});

      console.log(this.gridState.tiles[index]);

      this.setState({ turn: "O" });
      console.log(this.state.turn)
    }
    if (this.state.turn === "O"){
      this.gridState.tiles[index]  = _.assign(this.gridState.tiles[index], {content: 'O',});

      console.log(this.gridState.tiles[index]);

      this.setState({ turn: "X" });
      console.log(this.state.turn)
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
