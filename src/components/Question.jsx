import React, { Component } from "react";
// import components
// questions :
import "../css/Question.css";

class Question extends Component {
  render() {
    return (
      <div className="question">
        <h3 className="QText">{this.props.question}</h3>
      </div>
    );
  }
}

export default Question;
