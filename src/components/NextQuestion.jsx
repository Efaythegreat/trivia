import React from "react";

function NextQuestion(props) {
  let index = props.index;
  let setIndex = props.setIndex;
  let data = props.data;
  let setAnswer = props.setAnswer;

  return (
    <button
      onClick={() => {
        if (index === data.length - 1) {
          setAnswer(0);
          alert("That's Game");
        } else {
          setIndex(index + 1);
        }
        setAnswer(null);
      }}
    >
      {props.text}
    </button>
  );
}
export default NextQuestion;
