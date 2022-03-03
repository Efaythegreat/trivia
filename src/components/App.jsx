import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Questions(question) {
  return <h3>{question.text}</h3>;
}

function Answers(props) {
  let choices = props.answer;
  //console.log(props);

  /* for (let i = 0; i < choices.length; i++) {
    x.push(<div>{choices[i]}</div>);
  }
  */
  let choice = choices.map((x) => (
    <>
      <div>{x}</div> <br />
    </>
  ));

  return <div>{choice}</div>;
}

function App() {
  const [index, setIndex] = useState(0);
  /*function indexGOBrr(){
    index += 
    
  }
*/
  // console.log(data[index].question.text);

  function NextQuestion(props) {
    return (
      <button
        onClick={() => {
          setIndex(index + 1); /*setDisplayQuestion(null) BUG RIGHT HERE*/
        }}
      >
        {props.text}
      </button>
    );
  }

  const [answerDisplayed, setAnswerDisplayed] = useState(false);

  const [answer, setAnswer] = useState(null);

  function showAnswer() {
    let choices = data[index].question.choices;

    for (let i = 0; i < choices.length; i++) {
      if (i === data[index].question.correct_choice_index) {
        setAnswerDisplayed(true);
        console.log(answerDisplayed);
        //return choices[i];
        setAnswer(choices[i]);
      }
    }
  }

  return (
    <div className="app">
      <h1>Trivia!</h1>
      <div>
        <Questions text={data[index].question.text} />

        <Answers answer={data[index].question.choices} />
      </div>
      <div>
        <NextQuestion text="Next Question" />
      </div>
      <div>
        <br />
        <button onClick={() => showAnswer()}>Display Answer</button>
        <div>{answer}</div>
      </div>
    </div>
  );
}
export default App;
