import React, { Component } from 'react';

export default class Robot extends Component {
  constructor() {
    super();
    this.state = {
      spin: false,
      displayName: false
    };
  };
  render() {
    return (
      <div className="App" >
        <h2 onMouseOver={() => this.setState({ displayName: !this.state.displayName })}>
          domo arigato
        </h2>
        <h1 className={`name ${this.state.displayName ? "display-name" : null}`}>
          MR ROBOTO
        </h1>
        <div
          onClick={() => this.setState({ spin: !this.state.spin })}
          className={`${this.state.spin ? "spin" : null} head`}>
          <div className="cube-face front" >
            <div className="eye" />
            <div className="eye" />
            <div className="mustache" />
          </div>
          <div className="cube-face back" />
          <div className="cube-face left" />
          <div className="cube-face right" />
          <div className="cube-face top" />
          <div className="cube-face bottom" />
        </div>
        <div className="chest" />
        <div className="legs-container" >
          <div className="leg" />
          <div className="leg" />
        </div>
      </div >
    );
  };
};