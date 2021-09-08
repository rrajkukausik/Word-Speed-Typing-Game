import React, { useState, useContext, useEffect } from "react";

export default function WordStack(props) {
  useEffect(() => {
    if (props.stackWords.length === 8) {
      props.endGame();
    }
  }, [props.stackWords]);
  return (
    <div className="stack-box">
      {props.stackWords.map((word) => (
        <span className="stack-word">{word.word}</span>
      ))}
    </div>
  );
}
