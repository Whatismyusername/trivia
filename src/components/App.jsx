import React, { Component } from "react";
import "../css/App.css";
import Question from "./Question.jsx";
import AnswerList from "./AnswerList.jsx";
import Timer from "./Timer.jsx";
// import components

import { buildFirebase, getRandomQuestion } from "../clients/firebase";
var firebaseDatabase = buildFirebase();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: {
        questionText: "What planet is closest to the sun?",
        answer: ["Mars", "Mercury", "Jupiter", "Earth"],
        correctAnsIdx: 0,
        shuffle: false
      }
    };
    firebaseDatabase
      .ref("/questions")
      .once("value")
      .then(snapshot => {
        let questions = snapshot.val();
        let randomQuestion = getRandomQuestion(questions);
        let answer = this.shuffle(
          randomQuestion.choices,
          randomQuestion.correct_choice_index
        );
        this.setState({
          currentQuestion: {
            questionText: randomQuestion.question_text,
            answer: answer.choices,
            correctAnsIdx: answer.correctAnsIdx
          },
          shuffle: false
        });
      });
  }

  shuffle(answer, idx) {
    var currentQuestion = {
      answer: [],
      correctAnsIdx: ""
    };
    if (this.state.shuffle) {
      var usedIdx = [];
      for (var i = 0; i < answer.length; i++) {
        let num = this.generateNewIdx(usedIdx);
        if (num === idx) {
          currentQuestion.correctAnsIdx = num;
        }
        currentQuestion.answer.push(answer[num]);
        usedIdx.push(num);
      }
    } else {
      currentQuestion.answer = answer;
      currentQuestion.correctAnsIdx = idx;
    }
    return currentQuestion;
  }

  generateNewIdx(usedIdx) {
    let num = Math.floor(Math.random() * this.props.answer.length);
    if (usedIdx.includes(num)) {
      this.generateNewIdx(usedIdx);
    } else {
      return num;
    }
  }

  render() {
    return (
      <div className="app">
        <Timer />
        <Question question={this.state.currentQuestion.questionText} />
        <AnswerList
          answer={this.state.currentQuestion.answer}
          correctAnsIdx={this.state.currentQuestion.correctAnsIdx}
        />
      </div>
    );
  }
}

export default App;
