import { useEffect } from "react";
import { GameContext } from "../context";

const StackComponent = (props) => {
  const {setMultiplier } = useContext(GameContext);
  useEffect(() => {
    if (props.stackedWords.length === 7) {
      setMultiplier(1);
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