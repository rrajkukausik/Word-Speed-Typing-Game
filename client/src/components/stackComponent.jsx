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
      {props.stackedWords.map((word) => {
        return (
          <div className="stack-word">
            <p>{word.word}</p>
          </div>
        );
      })}
    </div>
  );
};

export default StackComponent;
