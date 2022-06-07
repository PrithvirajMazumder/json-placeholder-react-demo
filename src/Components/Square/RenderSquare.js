import React from "react";
import Square from "./Square";
const RenderSquare = ({
  key,
  squareid,
  onClick,
  handleSquareClick,
  nextPlayer
}) => (
  <Square
    squareid={squareid}
    handleSquareClick={handleSquareClick}
    nextPlayer={nextPlayer}
  />
);

export default RenderSquare;
