import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Questions(question) {
  return <h1>{question.text}</h1>;
}

function NextQuestion(nQuestion) {
  return <h2>{nQuestion.text}</h2>;
}

function AnswerOne(props) {
  return <h1></h1>;
}

function App() {
  let question = 0;

  return (
    <div className="app">
      Trivia!
      <div>
        <Questions text="Questions Goes Here" />
      </div>
      <div>
        <NextQuestion text="The Next Questions Goes Here" />
      </div>
      <button>Cool Button</button>
    </div>
  );
}

export default App;
