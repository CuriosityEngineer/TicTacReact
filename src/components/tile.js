import React from 'react';
import ReactDOM from 'react-dom';

const tileStyle = {
  float: 'left',
  verticalAlign: 'top',
  width: 125,
  height: 125,
  border: '3px solid transparent',
};

const buttonStyle = {
  background: 'transparent',
  border: 'none !important',
  fontSize: 20,
  width: 120,
  height: 120,
};

class Tile extends React.Component {
  constructor(){
    super();
  }

  bgInsect(){
    if (this.props.content === "X"){
      return (<img src={"https://s31.postimg.org/r2gbiwezb/blue_Insect01b.png"} height="100"/>);
    }
    if (this.props.content === "O"){
      return (<img src={"https://s31.postimg.org/o9n3yvemv/gold_Insect01b.png"} height="100"/>);
    }
  }

  render() {
    return (
      <div style={tileStyle}>
      <button
        style={buttonStyle}
        onClick={this.props.onClick}
        >
        {this.bgInsect()}

        </button>
      </div>
    );
  }
}

export default Tile;
