import React from 'react';
import Grid from '../components/grid';

class Board extends React.Component {
  render() {
    return (
      <div>
        <h1>Tic Tac Toe! Board</h1>
        <Grid/>
      </div>
    );
  }
}

export default Board;
