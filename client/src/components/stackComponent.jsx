import { useEffect } from "react";
import { GameContext } from "../context";

const StackComponent = (props) => {
  const { setMultiplier } = useContext(GameContext);
  const [len, setLen] = useState(0);
  useEffect(() => {
    if (props.stackedWords.length === 7) {
      setMultiplier(1);
      setLen(props.stackedWords.length - 1)
      // console.log(len,props.stackedWords.length-1,"just for check")
      props.endGame();
    }
  }, [props.stackedWords]);
  return (
    <div className="stack-box">
      {props.stackedWords.map((word, index) => {
        return (
          <div
            className={
              index === len
                ? "stack-word-new"
                : "stack-word"
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
