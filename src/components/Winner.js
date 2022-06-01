import React, { Component } from 'react'

export default class Winner extends Component {
    

      
  render() {
    return (
      
      
      <div>{this.props.winChecker(this.props.squares)}
      
      </div>


    )
  }
}
