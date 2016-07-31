import React from 'react';

const turnStyle = {
  border: '3px solid transparent',
  overflow:'hidden',
  paddingTop: 20,
  width: 400,
  height: 40,
};

class Player extends React.Component {
  render() {
    return (
      <div style={turnStyle}>
        Player {this.props.player}'s turn!
      </div>
    );
  }
}

export default Player;
