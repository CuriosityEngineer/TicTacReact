import React from 'react';
import GameModel from './models/GameModel';
import Header from './containers/header';
import Board from './containers/board';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tic Tac Toe!</h1>
        <Header/>
        <Board/>
      </div>
    );
  }
}

export default App;
