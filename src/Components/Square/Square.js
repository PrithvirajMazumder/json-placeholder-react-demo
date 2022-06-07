import React from "react";
import "./Square.css";

const Square = ({ squareid, handleSquareClick, squareVal }) => {
  return (
    <button className="square" onClick={() => handleSquareClick(squareid)}>
      {squareVal}
    </button>
  );
};

export default Square;
