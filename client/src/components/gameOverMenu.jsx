import React, { useState, useContext } from "react";
import Score from "../components/scorebar";
import { Link } from "react-router-dom";
import { GameContext } from "../context";
export default function Retry() {
  const { setScore, setLevel, setMultiplier,setActive } = useContext(GameContext);

  function handlePlayButton() {
    setScore(0);
    setLevel(1);
    setMultiplier(1);
    setActive(true);
  }
  return (
    <div className="game-container">
      <Score />
      <h1 className="game-over">Game Over !!! 😿 Stack is Full 😢</h1>
      <Link to="/game">
        <button className="playagain-button" onClick={handlePlayButton}>
          Play Again 🔁
        </button>
      </Link>
      <Link to="/savescore">
        <button className="savescore-button">Save Score📩</button>
      </Link>
      <Link to="/highscores">
        <button className="highscore-button">High Scores 🎯</button>
      </Link>
      <Link to="/allscores">
        <button className="allscore-button">All Scores 📖</button>
      </Link>
    </div>
  );
}
