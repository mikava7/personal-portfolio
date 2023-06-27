import React, { useState, useEffect } from "react";
import Board from "./Board";
import ScoreBoard from "./ScoreBoard";
import Start from "./Start";

const TicTacToe = () => {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState("");

  useEffect(() => {
    if (!xPlaying && !gameOver) {
      makeComputerMove();
    }
  }, [xPlaying]);

  const makeComputerMove = () => {
    setTimeout(() => {
      const availableMoves = board.reduce((acc, value, index) => {
        if (value === null) {
          return [...acc, index];
        }
        return acc;
      }, []);

      // Check if X player has two matching indices in any winning condition
      for (let i = 0; i < WIN_CONDITIONS.length; i++) {
        const [x, y, z] = WIN_CONDITIONS[i];
        const winningIndices = [x, y, z];

        const xCount = winningIndices.reduce((count, index) => {
          if (board[index] === "X") {
            return count + 1;
          }
          return count;
        }, 0);

        if (xCount === 2) {
          // Find the remaining index and make the move
          const remainingIndex = winningIndices.find(
            (index) => board[index] === null
          );
          if (remainingIndex !== undefined) {
            onClick(remainingIndex);
            return;
          }
        }
      }

      // Use a simple random move strategy if no winning condition is found
      const randomMoveIndex = Math.floor(Math.random() * availableMoves.length);
      const randomMove = availableMoves[randomMoveIndex];

      onClick(randomMove);
    }, 300); // Delay of 1 second (1000 milliseconds)
  };

  const onClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });

    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
      setGameOver(true);
    } else if (updatedBoard.every((value) => value !== null)) {
      // If all boxes are filled and no winner, it's a draw
      setGameOver(true);
    }

    setBoard(updatedBoard);
    setXPlaying((prevXplaying) => !prevXplaying);
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
    setXPlaying(true); // Set xPlaying to true when resetting the board
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        return board[x];
      }
    }

    return null; // Return null if no winner
  };

  return (
    <div>
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : onClick} />
      <Start resetBoard={resetBoard} />
    </div>
  );
};

export default TicTacToe;
