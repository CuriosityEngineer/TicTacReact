import React from 'react';
import ReactDOM from 'react-dom';
import Tile from '../components/tile';

const gridStyle = {
  border: '3px solid red',
  width: 470,
  textAlign: 'center',
  verticalAlign: 'middle',
};

const buttonStyle = {
  background: 'yellow',
  border: 'none !important',
  fontSize: 50,
  width: 145,
  height: 145,
};

class Grid extends React.Component {
  constructor(){
    super();

    this.gridState = {
      tiles:  [
        '', '', '',
        '', '', '',
        '', '', ''
      ]
    };

    this.state = {
      turnX: true,
      turnO: false,
      isHovering: false,
      isActive: false
    };
  }

//
// checkPlayer(){
//   var active = !this.state.turnX;
//   var active = !this.state.turnO;
//
//   if (this.state.turnX === true){
//     return <button style={buttonStyle}>X</button>
//     var active = !this.state.turnO;
//     this.setState({ turnO: active });
//     // return this.setState({turn: "O"});
//   }
//   if (this.state.turnO === true){
//     return <button style={buttonStyle}>O</button>
//     this.setState({ turnX: active });
//     // return this.setState({turn: "X"});
//   }
//   // else {
//   //   return <button style={buttonStyle}>empty</button>
//   // }
//   console.log(this.state.turnX);
// }

  handleClick () {
    var active = !this.state.isActive;
    this.setState({ isActive: active });
    console.log(this.state.isActive);
  }

  render() {
    return (
      <div>
        <div style={gridStyle}>
          { this.gridState.tiles.map(function(tile, index){
            return(
            // <Tile
            // key={index}
            // onClick={this.handleClick.bind(this)}
            // />
            <button
            key={index}
            style={buttonStyle}
            onClick={this.handleClick.bind(this)}
            ></button>
            );
          }, this) }
        </div>
      </div>
    );
  }
}

export default Grid;
