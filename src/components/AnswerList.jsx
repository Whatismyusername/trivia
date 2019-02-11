import React, { Component } from "react";
import Answer from "./Answer.jsx";
// import components

class AnswerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: ["Mars", "Mercury", "Jupiter", "Earth"],
      icon: ["heart", "smiley", "sun", "triangle"],
      shuffle: true,
      correctAnsIdx: this.props.correctAnsIdx
    };
  }

  shuffle() {
    var answer = [];
    if (this.state.shuffle) {
      let initialArray = this.props.answer;
      var usedIdx = [];
      for (var i = 0; i < this.props.answer.length; i++) {
        let num = this.generateNewIdx(usedIdx);
        answer.push(this.props.answer[num]);
        usedIdx.push(num);
      }
    } else {
      this.state.answer = this.props.answer;
      this.state.correctAnsIdx = this.props.correctAnsIdx;
    }
    return answer;
  }

  generateNewIdx(usedIdx) {
    let num = Math.floor(Math.random * this.props.answer.length);
    if (usedIdx.includes(num)) {
      this.generateNewIdx(usedIdx);
    } else {
      return num;
    }
  }

  render() {
    return (
      <div class="answerList">
        <Answer name={this.state.answer[0]} />
        <Answer name={this.state.answer[1]} />
        <Answer name={this.state.answer[2]} />
        <Answer name={this.state.answer[3]} />
      </div>
    );
  }
}

export default AnswerList;
