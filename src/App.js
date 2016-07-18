import React from 'react';
import GameModel from '../models/GameModel';

class App extends React.Component {
  constructor(){
    super();

    this.games = new GameModel();
    this.games.subscribe(this.updateList.bind(this));
  }

  updateList() {
    console.log(this.games.resources);

    this.setState({
      games: this.games.resources
    });
  }

  createGame() {
    this.games.addResource({
      playerOne: this.state.currentPlayer
    });
  }

  joinGame(game) {
    console.log("Joining game...");
    if (gameIsAvailable(game)) {
      if (gameIsJoinable(game)) {
        console.log("Joining game as player two...");
        this.games.save(game, { playerTwo: this.state.currentPlayer });
      }

      this.setState({
        currentGame: game
      });
    } else {
      window.alert("Can't touch this dung dung dung dung");
    }
  }

  gameIsAvailable(game) {
    return (game.playerOne === this.state.currentPlayer ||
      game.playerTwo === this.state.currentPlayer ||
      game.playerTwo === null);
  }

  gameIsJoinable(game) {
    return  (game.playerOne !== this.state.currentPlayer && game.playerTwo !== this.state.currentPlayer);
  }

  this.games.save(game, { playerTwo: this.state.currentPlayer });

    render() {
        return (
            <h1>Hello World!</h1>
        );
    }
}

export default App;
