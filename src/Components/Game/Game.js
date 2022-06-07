import React, { useState, useEffect } from "react";
import Board from "../Board/Board";
import "./Game.css";

const Game = () => {
  const [gameState, setGamestate] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ]);
  const [nextPlayer, setNextPlayer] = useState("X");
  const [winner, setWinner] = useState("");
  const [score, setScore] = useState({ X: 0, O: 0 });
  const handleSquareClick = squareid => {
    const newGameState = gameState.map((item, index) => {
      return index === squareid ? nextPlayer : item;
    });
    setGamestate(newGameState);
    setNextPlayer(nextPlayer === "X" ? "O" : "X");
  };
  const resetBoard = () => {
    setGamestate(gameState.map(() => ""));
    setWinner("");
  };

  useEffect(() => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 6, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    lines.forEach(line => {
      const [a, b, c] = line;
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[b] === gameState[c]
      ) {
        setWinner(gameState[a]);
        setScore({ ...score, [gameState[a]]: score[gameState[a]] + 1 });
      }
    });
  }, [gameState]);
  return (
    <div className="game">
      <Board
        gameState={gameState}
        handleSquareClick={handleSquareClick}
        resetBoard={resetBoard}
      />
      <div className="status">
        <span>Next player: {nextPlayer}</span>
        <span>Winner is: {winner}</span>
        <span>
          Score: X - {score.X} / O - {score.O}
        </span>
        <button onClick={resetBoard}>Reset</button>
      </div>
    </div>
  );
};

export default Game;
