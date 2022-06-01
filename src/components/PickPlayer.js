import React, { Component } from 'react'

export default class PickPlayer extends Component {
  playerInfo = () => {
    this.props.playerCheck(this.props.index)
  }
    render() {
    return (
      <>
        <div 
        className="playerChoice"
        onClick = {this.playerInfo}>
             
            {this.props.emojis}
            
        </div>
      </>
    )
  }
}
