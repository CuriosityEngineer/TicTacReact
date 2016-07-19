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
  }

  render() {
    return (
      <div>
        <h3>Tic Tac Toe! Grid</h3>
        <div style={gridStyle}>
          { this.gridState.tiles.map(function(){
            return(
            <Tile/>
          );
          }, this) }
        </div>
      </div>
    );
  }
}

export default Grid;
