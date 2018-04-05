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
      <button className = "square" onClick = {props.onClick} >
        {props.value}

      </button>
    );
}

class Board extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      //this fills the square with 9 elements
      squares: Array(9).fill(null), 
      playerOneIsNext: true, 
    }; 
  }
    handleClick(i){
      //slice is called to copy the squares array instead of mutating the existing array
      //immutability is impt for a couple of reasons: 
        //1. Easier undo/redo and travel time: keep reference to older version of data and switch btwn them if neccessary 
        //2. Tracking changes
        //3. Determing when to re-render in REact
      const squares = this.state.squares.slice(); 

      //code that handles no clicking if someone has already won the game
      if(calculateWinner(squares)||squares[i]){
        return; 
      }
      squares[i] = this.state.playerOneIsNext ? 'X': 'O'; 
      this.setState({
        squares:squares, 
        playerOneIsNext: !this.state.playerOneIsNext, 
      }); 
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
    //const status = 'Next player: ' + (this.state.playerOneIsNext ? 'X': 'O');
    const winner = calculateWinner(this.state.squares); 
    let status; 
    if(winner){
      status = 'Winner: '+ winner; 
    } else {
      status = 'Next player: ' + (this.state.playerOneIsNext ? 'X' : 'O'); 
    }
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

function calculateWinner(squares){
  const lines = [
      [0, 1, 2], 
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for(let i = 0; i < lines.length; i++){
      const[a,b,c] = lines[i]; 
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a]; 
      }
    }
    return null;
}


// ========================================

ReactDOM.render(<Game />, document.getElementById('root123'));
registerServiceWorker();

