import { useEffect } from "react";

const StackComponent = (props) => {
  useEffect(() => {
    console.log(props.stackedWords.length);
    if (props.stackedWords.length === 7) {
      props.endGame();
    }
  }, [props.stackedWords]);
  return (
    <div>
      {props.stackedWords.map((word) => {
        return (
          <div className="stack-box">
            <p className="stack-word">{word.word}</p>
          </div>
        );
      })}
    </div>
  );
};

export default StackComponent;