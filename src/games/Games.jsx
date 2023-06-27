import React from "react";
import { Link } from "react-router-dom";
const Games = () => {
  return (
    <div>
      <Link to="/tictactoe">TIcTacToe </Link>
      <Link to="/memoryGame">Test Your Memory</Link>

      <h2>Breakout</h2>
    </div>
  );
};

export default Games;
