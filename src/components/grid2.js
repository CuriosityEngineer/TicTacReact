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
        <div style={gridStyle}>
          { this.gridState.tiles.map(function(tile, index){
            return(
            <Tile key={index}/>
          );
          }, this) }
        </div>
      </div>
    );
  }
}

export default Grid;
