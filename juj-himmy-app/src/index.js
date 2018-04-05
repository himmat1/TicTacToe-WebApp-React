import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//app importing, replace the root element with this app 
//how the JS gets put into the HTML via root

//DOM- document object module, refers to the actual page

// class Square extends React.Component { //since no need for constructor, going to change it into a "functional component"
//   // constructor(props){
//   //   super(props); 
//   //   this.state = {
//   //     value: null, 
//   //   };
//   // }

//   //no longer keeps its own state, recieves value from parent
//   render() {
//       return (
//         <button className="square" onClick={() => this.props.onClick()}>
//           {this.props.value}
//         </button>
//     );
//   }
// }

//Functional component of Square: consist of render method, no constructor
function Square(props){
  return(
      <button className = "square" onClick = {props.onClick}>
        {props.value}
      </button>
    );
}

//olo*************checking PR tings

class Board extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      //this fills the square with 9 elements
      squares: Array(9).fill(null), 
    }; 
  }
    handleClick(i){
      //slice is called to copy the squares array instead of mutating the existing array
      //immutability is impt for a couple of reasons: 
        //1. Easier undo/redo and travel time: keep reference to older version of data and switch btwn them if neccessary 
        //2. Tracking changes
        //3. Determing when to re-render in REact
      const squares = this.state.squares.slice(); 
      squares[i] = 'X'; 
      this.setState({squares:squares}); 
    }

    renderSquare(i) {
      return (
        <Square 
          value = {this.state.squares[i]}
          onClick = {() => this.handleClick(i)}
        />
      );
  }


  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
       </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}



class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


// ========================================

ReactDOM.render(<Game />, document.getElementById('root123'));
registerServiceWorker();

