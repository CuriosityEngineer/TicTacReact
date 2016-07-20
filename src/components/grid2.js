import React from 'react';
import ReactDOM from 'react-dom';
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
      tiles:  [
        '', '', '',
        '', '', '',
        '', '', ''
      ]
    };

    this.state = {
      turn: "X",
      content: "something",
    };
  }

  whenClick(index){
    console.log(index);
    if (this.state.turn === "X"){

      this.setState({ turn: "O" });
      console.log(this.state.turn)
    }
    if (this.state.turn === "O"){

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
            content={this.state.content}
            onClick={this.whenClick.bind(this, index)}
            />
            );
          }, this) }
        </div>
    );
  }
}

export default Grid;
