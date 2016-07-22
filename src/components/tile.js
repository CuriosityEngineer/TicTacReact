import React from 'react';
import ReactDOM from 'react-dom';

const tileStyle = {
  float: 'left',
  verticalAlign: 'top',
  width: 150,
  height: 150,
  border: '3px solid #73AD21',
};

const buttonStyle = {
  background: 'yellow',
  border: 'none !important',
  fontSize: 20,
  width: 145,
  height: 145,
};

class Tile extends React.Component {
  render() {
    return (
      <div style={tileStyle}>
      <button
        style={buttonStyle}
        onMouseDown={this.props.onMouseDown}
        >
        {this.props.content}
        </button>
      </div>
    );
  }
}

export default Tile;
