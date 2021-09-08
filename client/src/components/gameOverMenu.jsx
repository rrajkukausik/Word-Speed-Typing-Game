import React, { useState, useContext, useEffect } from "react";
import Score from "../components/scorebar";
import { Link } from "react-router-dom";
import { GameContext } from "../context";
import { GameOverBeep } from "../utils/sounds";
export default function Retry() {
  const { setScore, setLevel, setMultiplier,setActive } = useContext(GameContext);

  useEffect(() => {
    GameOverBeep()
  })

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
        <button className="highscore-button">Top Scores 🎯</button>
      </Link>
      <Link to="/allscores">
        <button className="allscore-button">Leaderboard 📖</button>
      </Link>
    </div>
  );
}
