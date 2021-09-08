import React from "react";
import { Link } from 'react-router-dom'
export default function Instructions(props) {
  const setInit = props.setInit;

  const handleSetInit = () => {
    return setInit(true);
  };

  return (
    <div className="instructions-container">
      <div className="instructions-box">
        <h1 className="instructions-header"> 🔠 Word Racer 🏃‍♀️</h1>
        <h1 className="instructions-description">
          Instructions to Play the Game
        </h1>
        <ul className="instructions-list">
          <li>This game checks your Typing Speed.</li>
          <li>
            As soon as you start the game, some words will appear on the Screen.
          </li>
          <li>You have to type the words as fast as you can. </li>
          <li>
            Appearing Speed of words becomes fast as you reach higher levels.
          </li>
          <li>
            You have to restrict the Word Stack to become full, as the Game gets
            over when the stack gets full.{" "}
          </li>
        </ul>
        <Link to="/game">
          <button className="instructions-button">🎮 Start Game 💻</button>
        </Link>
      </div>
    </div>
  );
}
