import React, { Component } from "react";
import Timer from "./Timer.jsx";
// import components
import "../css/Answer.css";

class Answer extends Component {
  handleClick() {
    if (this.props.isCorrect) {
      this.correctAnswer();
    } else {
      this.incorrectAnswer();
    }
  }

  // if(Timer.state.timeIsUp){
  //   incorrectAnswer();
  // }
  correctAnswer() {
    alert("Correct!");
  }
  incorrectAnswer() {
    alert("Oops! Try again.");
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
