import React from 'react';
import Utils from '../lib/Utils';
import GameModel from '../models/GameModel';
import Header from './header';
import Grid2 from './grid2';

const appStyle = {
  border: '3px solid black',
  width: 480,
};

class Player extends React.Component {

  render() {
    return (
      <div style={appStyle}>
        <Header/>
        <Grid2/>
      </div>
    );
  }
}

export default Player;
