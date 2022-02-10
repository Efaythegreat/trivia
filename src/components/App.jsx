import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Questions(question) {
  return <h3>{question.text}</h3>;
}

function Answers(props) {
  var x = [];
  let choices = props.answer;
  console.log(props);

  for (let i = 0; i < choices.length; i++) {
    x.push(<div>{choices[i]}</div>);
  }
  //x.push(<br/>)

  console.log(x);
  return <div>{x}</div>;
}

function NextQuestion(props) {
  return <button>{props.text}</button>;
}

function App() {
  let question = 0;
  console.log(data[0].question.questionText);
  return (
    <div className="app">
      <h1>Trivia!</h1>
      <div>
        <Questions text={data[0].question.questionText} />

        <Answers answer={data[0].question.answerChoices} />
      </div>
      <div>
        <NextQuestion text="Next Question" />
      </div>
    </div>
  );
}

export default App;
