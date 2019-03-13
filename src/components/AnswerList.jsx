import React, { Component } from "react";
import Answer from "./Answer.jsx";
// import components
import "../css/Answer.css";
class AnswerList extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   answer: this.props.answer,
    //   icon: ["heart", "smiley", "sun", "triangle"],
    //   shuffle: false,
    //   correctAnsIdx: this.props.correctAnsIdx
    // };
    //this.updateQuestion();
    // console.log(this.state);
  }

  updateState(newState) {
    this.setState(newState);
  }

  render() {
    return (
      <div className="answerList">
        <Answer
          className=""
          name={this.props.answer[0]}
          isCorrect={0 === this.props.correctAnsIdx}
        />
        <Answer
          name={this.props.answer[1]}
          isCorrect={1 === this.props.correctAnsIdx}
        />
        <Answer
          name={this.props.answer[2]}
          isCorrect={2 === this.props.correctAnsIdx}
        />
        <Answer
          name={this.props.answer[3]}
          isCorrect={3 === this.props.correctAnsIdx}
        />
      </div>
    );
  }
}

export default AnswerList;
