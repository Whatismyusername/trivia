import React, { Component } from "react";
import "../css/App.css";
import Question from "./Question.jsx";
import AnswerList from "./AnswerList.jsx";
// import components

import { buildFirebase, getRandomQuestion } from "../clients/firebase";
var firebaseDatabase = buildFirebase();

class App extends Component {
  constructor(props) {
    super(props);
    var Questions;
    this.state = {
      currentQuestion: {
        questionText: "What planet is closest to the sun?",
        answer: ["Mars", "Mercury", "Jupiter", "Earth"],
        correctAnsIdx: 1
      },
      questions: Questions
    };
    firebaseDatabase
      .ref("/questions")
      .once("value")
      .then(snapshot => {
        let questions = snapshot.val();
        let randomQuestion = getRandomQuestion(questions);
        this.setState({
          questions: questions,
          currentQuestion: {
            questionText: randomQuestion.question_text,
            answer: randomQuestion.choices,
            correctAnsIdx: randomQuestion.correct_choice_index
          },
          randomQuestion: randomQuestion
        });
      });
  }

  render() {
    return (
      <div className="app">
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
