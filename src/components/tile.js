import React from 'react';
import ReactDOM from 'react-dom';

const tileStyle = {
  display: 'inline-block',
  width: 150,
  height: 150,
  border: '3px solid #73AD21',
};

const buttonStyle = {
  background: 'yellow',
  border: 'none !important',
  fontSize: 50,
  width: 145,
  height: 145,
};

class Tile extends React.Component {
  // constructor(){
  //   super();

//     this.state = {
//       turnX: true,
//       turnO: false,
//       isHovering: false,
//       isActive: false
//     };
//   }
//
//
//   checkPlayer(){
//     var active = !this.state.turnX;
//     var active = !this.state.turnO;
//
//     if (this.state.turnX === true){
//       return <button style={buttonStyle}>X</button>
//       var active = !this.state.turnO;
//       this.setState({ turnO: active });
//       // return this.setState({turn: "O"});
//     }
//     if (this.state.turnO === true){
//       return <button style={buttonStyle}>O</button>
//       this.setState({ turnX: active });
//       // return this.setState({turn: "X"});
//     }
//     // else {
//     //   return <button style={buttonStyle}>empty</button>
//     // }
//     console.log(this.state.turnX);
//   }
//
//   handleClick () {
//   var active = !this.state.isActive;
//   this.setState({ isActive: active });
//   console.log(this.state.isActive);
// }
//
//
//   nextPlayer() {
//   return this.state.turn === 1 ? 2 : 1;
//   }

  render() {
    return (
      <div style={tileStyle}>
      <button
        style={buttonStyle}
        onClick={this.props.handleClick.bind(this)}
        ></button>
      </div>
    );
  }
}

export default Tile;
