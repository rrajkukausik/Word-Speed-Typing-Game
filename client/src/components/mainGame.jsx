import React, { useState, useEffect, useRef, useContext } from "react";
import Score from "../components/scorebar";
import _ from "lodash";
import Keyboard from "../components/keyboard";
import WordStack from "../components/wordStack";
import { GameContext } from "../context";
// import { useHistory } from 'react-router';
import { Link } from "react-router-dom";

const stackWords = [
  { word: "RAJ" },
  { word: "KANHA" },
  { word: "AYUSH" },
  { word: "NIRMAL" },
  { word: "KIRAN" },
  { word: "PADMA" },
];
// const stackWords = [
//   { word: "cleannesses" },
//   { word: "deceivable" },
//   { word: "enfeebled" },
//   { word: "circumstantial" },
//   { word: "clank" },
//   { word: "rearousing" },
//   { word: "tomcats" },
//   { word: "harmfulness" },
//   { word: "unicolor" },
//   { word: "multimode" },
//   { word: "moundbirds" },
//   { word: "toilsome" },
//   { word: "exchanged" },
//   { word: "cattle" },
//   { word: "epigrapher" },
//   { word: "untitled" },
//   { word: "curricles" },
//   { word: "unicolor" },
//   { word: "reactions" },
//   { word: "wildlings" },
//   { word: "tacklings" },
// ];
export default function Game() {
  const [end, setEnd] = useState(false);
  const [time, setTime] = useState(3000);
  const [stackedWords, setStackedWords] = useState([]);
  const [activeWord, setActiveWord] = useState("");
  const [activeId, setActiveId] = useState(0);
  const [currentInput, setCurrentInput] = useState("");
  const stack = [];
  const interval = useRef({});
  const { score, setScore, level, setLevel, setMultiplier ,setActive} =
    useContext(GameContext);

  useEffect(() => {
    clearInterval(interval.current.id);
  }, [end]);

  const endGame = () => {
    setEnd((prevValue) => !prevValue);
    setActive(false);
    // window.location = "/retry";
    // browserHistory.push('/retry')
    // const routerHistory = useHistory();
    // routerHistory.push('/retry');
    // <Link to="/retry" />
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
      if (activeWord.indexOf(newInput) === 0) {
        if (activeWord === newInput) {
          removeStackedWords(activeId);
          setScore((prevState) => prevState + 10);
          if (score >= 30 * level) {
            setLevel((prevState) => prevState + 1);
            setMultiplier((prevState) => prevState * 1.2);
            setTime((prevState) => prevState * 0.5);
          }
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
