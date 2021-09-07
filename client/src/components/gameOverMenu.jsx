import React, { useState, useContext } from "react";
import Score from "../components/scorebar";
import { Link } from "react-router-dom";
import { GameContext } from "../context";
import ResetGame from "./resetGame";
export default function Retry() {
  const { setActive } = useContext(GameContext);

  function resetGame() {
    setActive(true);
    // setSaved(0);
  }
  return (
    <div className="game-container">
      <Score />
      <h1 className="game-over">Game Over !!! 😿 Stack is Full 😢</h1>
      {/* <Link to="/game">
        <button  >Play Again 🔁</button>
      </Link> */}
      <ResetGame reset={resetGame} />
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
