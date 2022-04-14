import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

import Answers from "./Answers";
import NextQuestion from "./NextQuestion";

function Questions(question) {
  return <h3>{question.text}</h3>;
}

function App() {
  const [index, setIndex] = useState(0);

  const [answerDisplayed, setAnswerDisplayed] = useState(false);

  const [answer, setAnswer] = useState(null);

  function showAnswer() {
    let choices = data[index].question.choices;

    for (let i = 0; i < choices.length; i++) {
      if (i === data[index].question.correct_choice_index) {
        setAnswerDisplayed(true);
        console.log(answerDisplayed);
        //return choices[i];
        setAnswer("The Correct Answer is " + choices[i]);
      }
    }
  }

  function correctness(answer) {
    if (
      answer ===
      data[index].question.choices[data[index].question.correct_choice_index]
    ) {
      setAnswer("That's Correct!!");
    } else {
      setAnswer("Nope, it's not " + answer);
    }
  }

  return (
    <div className="app">
      <div className="title">
        <h1>Trivia!</h1>
      </div>
      <div>
        <Questions text={data[index].question.text} />

        <Answers
          answer={data[index].question.choices}
          correctness={correctness}
        />
      </div>
      <div>
        <NextQuestion
          data={data}
          setIndex={setIndex}
          index={index}
          text="Next Question"
          setAnswer={setAnswer}
        />
      </div>
      <div>
        <br />
        <button onClick={() => showAnswer()}>Display Answer</button>
        <p></p>
        <div>{answer}</div>
      </div>
    </div>
  );
}
export default App;
