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

  //x.push(<br/>)

  //console.log(choice);
  return <div>{choice}</div>;
}

function App() {
  var index = 0;
  /*function indexGOBrr(){
    index += 
  }
*/
  // console.log(data[index].question.text);

  function NextQuestion(props) {
    return <button /*onClick={() => indexGoBrr  ()}*/>{props.text}</button>;
  }

  const [answerDisplayed, setAnswerDisplayed] = useState(false);

  function showAnswer() {
    let choices = data[index].question.choices;

    for( let i = 0; i < choices.length; i++){
      if (i === data[index].question.correct_choice_index){
        setAnswerDisplayed(true);
        console.log(answerDisplayed);

        return choices[i]
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
        <div className="answer"></div>
      </div>
    </div>
  );
}

export default App;
