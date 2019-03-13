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
        correctAnsIdx: 0
      },
      shuffle: true
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

        console.log(randomQuestion.choices);
        console.log(answer.answer);
        console.log("app", answer);
        this.setState({
          currentQuestion: {
            questionText: randomQuestion.question_text,
            answer: answer.answer,
            correctAnsIdx: answer.correctAnsIdx
          }
        });
      });
  }

  // shuffle(answer, idx) {
  //   var currentQuestion = {
  //     answer: [],
  //     correctAnsIdx: ""
  //   };
  //   console.log(this.state.shuffle);
  //   if (this.state.shuffle) {
  //     console.log("Shuffle");
  //     var usedIdx = [];
  //     for (var i = 0; i < answer.length; i++) {
  //       let num = this.generateNewIdx(usedIdx, answer.length);
  //       if (num === idx) {
  //         currentQuestion.correctAnsIdx = num;
  //       }
  //       console.log(answer, num);
  //       currentQuestion.answer.push(answer[num]);
  //       usedIdx.push(num);
  //     }
  //   } else {
  //     currentQuestion.answer = answer;
  //     currentQuestion.correctAnsIdx = idx;
  //   }
  //   return currentQuestion;
  // }

  // generateNewIdx(usedIdx, length) {
  //   let num = Math.floor(Math.random() * length);
  //   if (usedIdx.includes(num)) {
  //     this.generateNewIdx(usedIdx, length);
  //   } else {
  //     usedIdx.push(num);
  //     return num;
  //   }
  // }

  shuffle(answerChoices, correctIdx) {
    var shuffled = {
      answer: [],
      correctIdx: ""
    };
    var shuffledIdx = [];
    var newIdxArray = this.newIdxArray(shuffledIdx, answerChoices.length);
    for (var i = 0; i < newIdxArray.length; i++) {
      shuffled.answer.push(newIdxArray[i]);
    }
  }

  newIdxArray(shuffledIdx, length) {
    let randomIdx = Math.floor(Math.random() * length);
    if (shuffledIdx.includes(randomIdx)) {
      this.newIdxArray(shuffledIdx, length);
    } else {
      shuffledIdx.push(randomIdx);
      newCorrectIdx;
    }
    if (shuffledIdx.length < length) {
      this.newIdxArray(shuffledIdx, length);
    }
  }

  newCorrectIdx() {}

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
