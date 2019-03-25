import React, { Component } from "react";
// import components
import "../css/Timer.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: this.props.mode
    };
  }

  render() {
    return (
      <div className="timer">
        <p className="timerText">{this.props.timeLeft}</p>
        <img
          id="TrivieLogo"
          src="https://uploads.codesandbox.io/uploads/user/4c5b85cc-a302-4b72-97fa-14ea2c6cd846/x5Zp-Trivie.png"
        />
      </div>
    );
  }
}

export default Timer;
