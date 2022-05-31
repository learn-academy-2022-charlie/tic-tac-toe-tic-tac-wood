import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null]
    }
  }
    handleGamePlay = (index) => {
      const {squares} = this.state
      
      squares[index] = "⭕️"
      this.setState({squares: squares})
    }
  render() {
    console.log(this.state.squares)
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
            /> 
          )
        })}
        </div>
      </>
    )
  }
}
export default App
