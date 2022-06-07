import React from "react";
import "./Board.css";
import Square from "../Square/Square";

const Board = ({ handleSquareClick, gameState }) => {
  return (
    <>
      <div className="board">
        {gameState.map((item, index) => (
          <Square
            key={index}
            squareid={index}
            squareVal={gameState[index]}
            handleSquareClick={handleSquareClick}
          />
        ))}
      </div>
    </>
  );
};

export default Board;
