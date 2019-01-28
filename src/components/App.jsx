import React, { Component } from "react";
import "../css/App.css";
import Question from "./Question.jsx";
import AnswerList from "./AnswerList.jsx";
import Answer from "./Answer.jsx";
// import components
import Question from "./Question.jsx";

class App extends Component {
  render() {
    return (
      <div className="app">
        Trivia!
        <Question />
        <Question />
      </div>
    );
  }
}

export default App;
