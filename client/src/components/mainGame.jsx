import React, { useState, useEffect, useRef ,useContext} from "react";
import Score from "../components/scorebar";
import _ from "lodash";
import Keyboard from "../components/keyboard";
import WordStack from "../components/wordStack";
import {GameContext} from "../context"

const stackWords = [
  { word: "KANHA" },
  { word: "RAJ" },
  { word: "AYUSH" },
  { word: "NIRMAL" },
  { word: "KIRAN" },
  { word: "PADMA" },
];
export default function Game() {
  const [open, setOpen] = useState(false);
  const [end, setEnd] = useState(false);
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(3000);
  const [stackedWords, setStackedWords] = useState([]);
  const [activeWord, setActiveWord] = useState("");
  const [activeId, setActiveId] = useState(0);
  const [currentInput, setCurrentInput] = useState("");
  // const [wordCounter, setWordCounter] = useState(0);
  const stack = [];
  const level = 3;
  var tempWord = "";
  let wordCounter = 0;
  const interval = useRef({});
  const {setActive} = useContext(GameContext);

  useEffect(() => {
    clearInterval(interval.current.id);
  }, [end]);

  const endGame = () => {
    setEnd((prevValue) => !prevValue);
    setActive(false);
  };

  const handleGame = () => {
    interval.current.id = setInterval(() => {
      let rng = Math.floor(Math.random() * stackWords.length);
      let idObj = { id: Date.now() };
      let wordObj = Object.assign(stackWords[rng], idObj);
      setStackedWords((prevState) => [...prevState, wordObj]);
      setActiveWord(wordObj.word);
      setActiveId(wordObj.id);
      setCurrentInput("");
    }, time);
  };

  const onKeyPress = (e) => {
    const key = e.key.toUpperCase();
    if (key.match(/[A-Z]/i)) {
      const newInput = currentInput + key;
      console.log(newInput, "ni");
      if (activeWord.indexOf(newInput) === 0) {
        if (activeWord === newInput) {
          removeStackedWords(activeId);
        }
        setCurrentInput(newInput);
      } else {
        setCurrentInput("");
      }
    }
  };

  const removeStackedWords = (...args) => {
    const id = args;
    stack.push(activeId);
    setStackedWords((prevState) => {
      let index = _.findIndex(prevState, { id });
      let newItems = _.cloneDeep(prevState);
      newItems.splice(index, 1);
      return newItems;
    });
  };

  return (
    <div
      className="game-container"
      onKeyDown={(e) => {
        onKeyPress(e);
      }}
      tabIndex="0"
    >
      <Score />
      <button className="start-button" onClick={handleGame}>
        Play Game ▶
      </button>
      <WordStack stackWords={stackedWords} endGame={endGame} />
      <Keyboard />
    </div>
  );
}
