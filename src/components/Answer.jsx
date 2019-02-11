import React, { Component } from "react";
// import components
import "../css/Answer.css";

class Answer extends Component {
  handleClick() {
    if (this.props.isCorrect) {
      alert("Correct answer");
    } else {
      alert("wrong");
    }
  }
  render() {
    return (
      <button className="Answer" onClick={() => this.handleClick()}>
        <p>{this.props.name}</p>
      </button>
    );
  }
}

export default Answer;
