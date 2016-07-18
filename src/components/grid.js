import React from 'react';
import Tiles from '../components/tiles';

class Grid extends React.Component {
  render() {
    return (
      <div>
        <h3>Tic Tac Toe! Grid</h3>
        <Tiles/>
      </div>
    );
  }
}

export default Grid;
