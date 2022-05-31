import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      turn: true,
      whoWon: null,
          
    }
  }
    
    

    handleGamePlay = (index, whoseTurn) => {
      const {squares, turn} = this.state
      
      if (squares[index] !== null) {
        void(0)
      } else if(turn === true) {
        squares[index] = "⭕️"
       
        this.setState({squares: squares, turn: false})
      } else if(turn === false) {
        squares[index] = "❌"
        
        this.setState({squares: squares, turn: true})
      }
      
    }

    winner (squareArr) {
      
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
      let winner = null
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squareArr[a] && squareArr[a] === squareArr[b] && squareArr[a] === squareArr[c]) {
          winner = squareArr[a] ;
        }
      }
      this.setState({whoWon: winner}) 
    }
  

  render() {
    console.log("square:", this.state.squares)
    console.log("turn:", this.state.turn)
    console.log("playA:", this.state.playA)
    console.log("playB:", this.state.playB)
    console.log("win:", this.state.whoWon)

    

    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className='game-board'> 

        

        {this.state.squares.map((value, index) => {
          return (
            <Square 
            value = {value}
            key = {index}
            index = {index}
            handleGamePlay = {this.handleGamePlay}
            turn = {this.state.turn}
            win = {this.winner}
            /> 
          )
        })}
        </div>
        <div>
          <p>{this.state.whoWon}</p>
        </div>
      </>
    )
  }
}
export default App
