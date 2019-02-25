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
      shuffle: true,
      correctAnsIdx: this.props.correctAnsIdx
    };
  }

  shuffle() {
    var currentQuestion = {
      answer: [],
      correctAnsIdx: ""
    };
    if (this.state.shuffle) {
      let initialArray = this.props.answer;
      var usedIdx = [];
      for (var i = 0; i < this, props.answer.length; i++) {
        let num = generateNewIdx(usedIdx);
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

    this.setState({
      answer: currentQuestion.answer,
      correctAnsIdx: currentQuestion.correctAnsIdx
    });
  }

  generateNewIdx(usedIdx) {
    let num = math.floor(Math.random * this.props.answer.length);
    if (usedIdx.includes(num)) {
      generateNewIdx(usedIdx);
    } else {
      return num;
    }
  }

  updateQuestion() {
    shuffle();
  }

  render() {
    return (
      <div className="answerList">
        <Answer
          id="Choice"
          name={this.props.answer[0]}
          isCorrect={0 === this.state.correctAnsIdx}
        />
        <Answer
          name={this.state.answer[1]}
          isCorrect={1 === this.state.correctAnsIdx}
        />
        <Answer
          name={this.state.answer[2]}
          isCorrect={2 === this.state.correctAnsIdx}
        />
        <Answer
          name={this.state.answer[3]}
          isCorrect={3 === this.state.correctAnsIdx}
        />
      </div>
    );
  }
}

export default AnswerList;
