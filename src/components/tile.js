import React from 'react';

const tileStyle = {
  display: 'inline-block',
  width: 150,
  height: 150,
  border: '3px solid #73AD21',
};

class Tile extends React.Component {
  render() {
    return (
      <div style={tileStyle}>
        <h5>Tile</h5>
      </div>
    );
  }
}

export default Tile;
