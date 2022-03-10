import React from "react";

function Answers(props) {
  let choices = props.answer;
  let correctness = props.correctness;
  //console.log(props);

  let choice = choices.map((x) => (
    <>
      <div onClick={() => correctness(x)}>{x}</div> <br />
    </>
  ));

  return <div>{choice}</div>;
}

export default Answers;
