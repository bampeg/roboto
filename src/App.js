import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      spin: false
    }
  }
  render() {



    return (
      <div className="App">
        <div
          onClick={() => this.setState({ spin: !this.state.spin })}
          className={`${this.state.spin ? "spin" : null} thing-1`} />
      </div>
    )
  }
}