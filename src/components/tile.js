import React from 'react';
import ReactDOM from 'react-dom';

const tileStyle = {
  float: 'left',
  verticalAlign: 'top',
  width: 125,
  height: 125,
  border: '3px solid #73AD21',
};

const buttonStyle = {
  background: 'transparent',
  border: 'none !important',
  fontSize: 20,
  width: 120,
  height: 120,
};

class Tile extends React.Component {
  render() {
    return (
      <div style={tileStyle}>
      <button
        style={buttonStyle}
        onClick={this.props.onClick}
        >
        {this.props.content}
        </button>
      </div>
    );
  }
}

export default Tile;
