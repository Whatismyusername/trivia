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
      questions: 0,
      currentQuestion: {
        questionText: "What planet is closest to the sun?",
        answer: ["Mars", "Mercury", "Jupiter", "Earth"],
        correctAnsIdx: 0
      },
      mode: "classic",
      shuffle: true,
      isQuestionOver: false,
      timeLeft: 30,
      timeIsUp: false
    };

    firebaseDatabase
      .ref("/questions")
      .once("value")
      .then(snapshot => {
        var questions = snapshot.val();
        let randomQuestion = getRandomQuestion(questions);
        let answer = this.shuffle(
          randomQuestion.choices,
          randomQuestion.correct_choice_index
        );

        console.log(
          "before shuffled: " +
            randomQuestion.choices +
            ", correct index:" +
            randomQuestion.correct_choice_index
        );
        console.log(
          "after shuffled: " +
            answer.answer +
            ", correct index:" +
            answer.correctAnsIdx
        );
        this.setState({
          questions: questions,
          currentQuestion: {
            questionText: randomQuestion.question_text,
            answer: answer.answer,
            correctAnsIdx: answer.correctAnsIdx
          }
        });
      });
    let that = this;
    this.timer = setInterval(function() {
      if (that.state.timeLeft > 0) {
        that.setState({
          timeLeft: that.state.timeLeft - 1
        });
      } else {
        alert("time is up!");
        that.setState({
          timeIsUp: true
        });
      }
    }, 1000);
  }

  setQuestionOver() {
    this.setState({
      isQuestionOver: true
    });
  }

  componentsDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.isQuestionOver) {
      this.setState({
        isQuestionOver: false
      });
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  shuffle(answer, idx) {
    var currentQuestion = {
      answer: [],
      correctAnsIdx: ""
    };
    console.log(this.state.shuffle);
    if (this.state.shuffle) {
      console.log("Shuffle");
      var usedIdx = [];
      for (var i = 0; i < answer.length; i++) {
        this.generateNewIdx(usedIdx, answer.length);
      }
      for (var j = 0; j < answer.length; j++) {
        currentQuestion.answer.push(answer[usedIdx[j]]);
      }
      for (var a = 0; a < usedIdx.length; a++) {
        if (usedIdx[a] === idx) {
          currentQuestion.correctAnsIdx = a;
        }
      }
    } else {
      currentQuestion.answer = answer;
      currentQuestion.correctAnsIdx = idx;
    }
    return currentQuestion;
  }

  generateNewIdx(usedIdx, length) {
    let num = Math.floor(Math.random() * length);
    if (usedIdx.includes(num) || isNaN(num)) {
      this.generateNewIdx(usedIdx, length);
    } else {
      usedIdx.push(num);
      return num;
    }
  }

  render() {
    return (
      <div className="app">
        <Timer mode={this.state.mode} timeLeft={this.state.timeLeft} />
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
