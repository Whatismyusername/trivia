import React, { Component } from "react";
// import components
import "../css/Timer.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeleft: 30
    };
    let that = this;
    this.timer = setInterval(function() {
      that.setState({
        timeleft: that.state.timeleft - 1
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return <p>{this.state.timeleft}</p>;
  }
}

export default Timer;
