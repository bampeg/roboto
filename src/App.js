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
        <h1>MR ROBOTO</h1>
        <div
          onClick={() => this.setState({ spin: !this.state.spin })}
          className={`${this.state.spin ? "spin" : null} head`}>

          <div className="eye" />
          <div className="eye" />
        </div>

        <div className="chest" />

        <div className="legs-container">
          <div className="leg" />
          <div className="leg" />
        </div>

      </div>
    )
  }
}