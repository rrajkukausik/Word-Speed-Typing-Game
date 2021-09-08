import { useEffect } from "react";
import { GameContext } from "../context";

const StackComponent = (props) => {
  const { setMultiplier } = useContext(GameContext);
  useEffect(() => {
    if (props.stackedWords.length === 7) {
      setMultiplier(1);
      props.endGame();
    }
  }, [props.stackedWords]);
  return (
    <div className="stack-box">
      {props.stackedWords.map((word, index) => {
        return (
          <div
            className={
              props.stackedWords.length - 1 === index
                ? "stack-word"
                : "stack-word-new"
            }
          >
            <p>{word.word}</p>
          </div>
        );
      })}
    </div>
  );
};

export default StackComponent;
