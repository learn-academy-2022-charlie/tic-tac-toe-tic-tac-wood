import React, { Component } from 'react'
import Square from './components/Square'
import Winner from './components/Winner'
import PickPlayer from './components/PickPlayer'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      turn: true,
     
      emojis: ["⭕️", "❌", "🐈‍⬛", "🐕", "🌭", "🍔" ],
      emojiOrder: 0,
      playerOne: null,
      playerTwo: null,
      gameEnd: false,
      winner: null,          
    }
  }
 
  winCheck = (squareArr) => {
      
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
    let {winner, gameEnd}=this.state
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squareArr[a] && squareArr[a] === squareArr[b] && squareArr[a] === squareArr[c]) {
           winner = `${squareArr[a]} is the winner!`
           gameEnd = true
      } else if(squareArr.indexOf(null) === -1) {
           winner = "Stalemate!"
           gameEnd = true
        
      }
        
    }
    return winner
  }
  
    
    playerCheck = (emojiIndex) => {
        let {emojis, emojiOrder} = this.state
        if (emojiOrder === 0){
          this.setState({playerOne: emojis[emojiIndex], emojiOrder: emojiOrder + 1})
        } else if (emojiOrder === 1) {
          this.setState({playerTwo: emojis[emojiIndex], emojiOrder: emojiOrder + 1})
        } else {
          void(0)
        }

    }
    
    handleGamePlay = (index) => {
      const {squares, turn, playerOne, playerTwo, gameEnd} = this.state  
      
      if (gameEnd === true){
        alert("Please reset the game!")
      }

      if(playerOne === null || playerTwo === null) {
        alert("Please pick players ")
      } else if (squares[index] !== null) {
        void(0)
      } else if(turn === true) {
        squares[index] = playerOne
        this.setState({squares: squares, turn: false})
      } else if(turn === false) {
        squares[index] = playerTwo
        this.setState({squares: squares, turn: true})
      } 
      
    }

    restart = () => {
      this.setState(
        {
          squares:[null, null, null, null, null, null, null, null, null],
          turn: true,
          
          emojiOrder: 0,
          playerOne: null,
          playerTwo: null  
        }
      )
    }
  

  render() {
    console.log("square:", this.state.squares)
    // console.log("turn:", this.state.turn)
    // console.log("playA:", this.state.playA)
    // console.log("playB:", this.state.playB)
    // console.log("win:", this.state.whoWon)
    console.log(this.state.turnCount)

    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className = "playerId">
          <div>P1 {this.state.playerOne}</div>
          <div>P2 {this.state.playerTwo}</div>
        </div>
        <div>
          <button onClick={this.restart}>
            RESET
          </button>
        </div>
        <div className='game-board'> 
        {this.state.squares.map((value, index) => {
          return (
            <Square 
            value = {value}
            key = {index}
            index = {index}
            handleGamePlay = {this.handleGamePlay}
            turn = {this.state.turn}
            turnCount = {this.state.turnCount}
            /> 
          )
        })}
        </div>
       
        <div className = "players">
            {this.state.emojis.map((value, index) => {
              return (
                <PickPlayer
                playerCheck = {this.playerCheck}
                key={index}
                emojis = {value}
                index={index}
                />
              )
            })}
            
        </div>
        
        <div className = "winnerBox">
          <div className = "winner">
            {/* <Winner
            squares={this.state.squares}
            winChecker = {this.winCheck}
            winner= {this.state.winner}
            /> */}
            {this.winCheck(this.state.squares)}
          </div> 
        </div>
      </>
    )
  }
}
export default App
