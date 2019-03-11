import React, { Component } from "react";
import Answer from "./Answer.jsx";
// import components
import "../css/Answer.css";
class AnswerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: this.props.answer,
      icon: ["heart", "smiley", "sun", "triangle"],
      shuffle: false,
      correctAnsIdx: this.props.correctAnsIdx
    };
    //this.updateQuestion();
    // console.log(this.state)
  }

  componentWillReceiveProps() {
    this.updateState({
      answer: this.props.answer,
      icon: ["heart", "smiley", "sun", "triangle"],
      shuffle: false,
      correctAnsIdx: this.props.correctAnsIdx
    });
  }

  shuffle() {
    var currentQuestion = {
      answer: [],
      correctAnsIdx: ""
    };
    if (this.state.shuffle) {
      var usedIdx = [];
      for (var i = 0; i < this.props.answer.length; i++) {
        let num = this.generateNewIdx(usedIdx);
        if (num === this.props.correctAnsIdx) {
          currentQuestion.correctAnsIdx = num;
        }
        currentQuestion.answer.push(this.props.answer[num]);
        usedIdx.push(num);
      }
    } else {
      currentQuestion.answer = this.props.answer;
      currentQuestion.correctAnsIdx = this.props.correctAnsIdx;
    }

    this.updateState({
      answer: currentQuestion.answer,
      icon: ["heart", "smiley", "sun", "triangle"],
      shuffle: false,
      correctAnsIdx: currentQuestion.correctAnsIdx
    });
  }

  generateNewIdx(usedIdx) {
    let num = Math.floor(Math.random() * this.props.answer.length);
    if (usedIdx.includes(num)) {
      this.generateNewIdx(usedIdx);
    } else {
      return num;
    }
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
