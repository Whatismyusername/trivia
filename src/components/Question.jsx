import React, { Component } from "react";
// import components
// questions :

class Question extends Component {
  render() {
    return (
      <div>
        <p>{this.props.question}</p>
      </div>
    );
  }
}

export default Question;
