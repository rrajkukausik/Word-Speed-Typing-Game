import React, { useState, useEffect, useRef, useContext } from "react";
import Score from "../components/scorebar";
import _ from "lodash";
import Keyboard from "../components/keyboard";
import WordStack from "../components/wordStack";
import { GameContext } from "../context";
import { clearBeep, Beep } from "../utils/sounds";

const stackWords = [
  { word: "SUNO" },
  { word: "SINGLE" },
  { word: "DOUBLE" },
  { word: "GRAND" },
  { word: "KIRKIT" },
  { word: "DANCE" },
  { word: "SONG" },
  { word: "WALK" },
  { word: "KICK" },
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
  const [stackedWords, setStackedWords] = useState([]);
  const [activeWord, setActiveWord] = useState("");
  const [activeId, setActiveId] = useState(0);
  const [currentInput, setCurrentInput] = useState("");
  const stack = [];
  const { score, setScore, level, setLevel, multiplier,setMultiplier, setActive } =
    useContext(GameContext);

  const endGame = () => {
    setActive(false);
  };

  const startGame = () => {
    document.getElementById("start-button-id").style.display = "none";
    document.getElementById("game-container-id").focus();
    var time = 3000;
    (function foo() {
      let seed = Math.floor(Math.random() * stackWords.length);
      let idObj = { id: Date.now() };
      let wordObj = Object.assign(stackWords[seed], idObj);
      setStackedWords((prevState) => [...prevState, wordObj]);
      setActiveWord(wordObj.word);
      setActiveId(wordObj.id);
      setCurrentInput("");
      if (time > 500) time = time - (multiplier*50);
      setTimeout(foo, time);
    })();
  };

  const onKeyPress = (e) => {
    const key = e.key.toUpperCase();
    if (key.match(/[A-Z]/i)) {
      const newInput = currentInput + key;
      if (activeWord.indexOf(newInput) === 0) {
        if (activeWord === newInput) {
          removeWordFromStack(activeId);
          clearBeep();
          setScore((prevState) => prevState + 10);
          if (score >= 30 * level) {
            setLevel((prevState) => prevState + 1);
            setMultiplier((prevState) => prevState * 1.5);
          }
        }
        setCurrentInput(newInput);
      } else {
        Beep();
        setCurrentInput("");
      }
    }
  };

  const removeWordFromStack = (...args) => {
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
      id="game-container-id"
      onKeyDown={(e) => {
        onKeyPress(e);
      }}
      tabIndex="0"
    >
      <Score />
      <button id="start-button-id" className="start-button" onClick={startGame}>
        Play Game ▶
      </button>
      <WordStack stackWords={stackedWords} endGame={endGame} />
      <Keyboard />
    </div>
  );
}
