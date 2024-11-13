import { useState } from "react";
import { checkWinner } from "./utils";

export const SimpleTicTacToe = () => {
  // Initialize state for the board and the current player
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  // Handle click on a square
  const handleSquareClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const detectedWinner = checkWinner(newBoard, 3, 3);
    if (detectedWinner) {
      setWinner(detectedWinner);
    }
  };

  // Reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  // Render a single square
  const renderSquare = (index: number) => (
    <button
      onClick={() => handleSquareClick(index)}
      style={{ width: "60px", height: "60px", fontSize: "24px" }}
    >
      {board[index]}
    </button>
  );

  // Render the board
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Tic Tac Toe</h2>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      {winner ? (
        <div>
          <h3>Winner: {winner}</h3>
          <button onClick={resetGame}>Play Again</button>
        </div>
      ) : (
        <h3>Next Player: {isXNext ? "X" : "O"}</h3>
      )}
    </div>
  );
};
