import React from 'react';

const turnStyle = {
  border: '3px solid purple',
  overflow:'hidden',
  paddingTop: 20,
  width: 470,
  height: 40,
  textAlign: 'center',
};

class Player extends React.Component {
  render() {
    return (
      <div style={turnStyle}>
        Player {this.props.player}
      </div>
    );
  }
}

export default Player;
