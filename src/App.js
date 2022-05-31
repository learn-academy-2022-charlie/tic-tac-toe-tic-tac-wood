import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      turn: [0]
    }
  }
    


    handleGamePlay = (index, whoseTurn) => {
      const {squares, turn} = this.state
      turn[0] = whoseTurn[0] + 1
      if(turn[0] %2 !== 0) {
        squares[index] = "⭕️"
        this.setState({squares: squares, turn: turn})
      } else {
        squares[index] = "❌"
        this.setState({squares: squares, turn: turn})
      }
      
      
    }
  render() {
    console.log("square:", this.state.squares)
    console.log("turn:", this.state.turn)
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
            /> 
          )
        })}
        </div>
      </>
    )
  }
}
export default App
