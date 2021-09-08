import React, { useContext } from "react";
import { GameContext } from "../context";

export default function Score() {
  const { score, level, multiplier } = useContext(GameContext);

  return (
    <div className="scorebar">
      <h1>Score:{score}</h1>
      <h1>Level: {level}</h1>
      <h1>Multiplier: {multiplier.toFixed(2)}X</h1>
    </div>
  );
}
