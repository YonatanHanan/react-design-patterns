import { useState, useEffect } from "react";
import { checkWinner } from "./utils";

export const DynamicTicTacToe = ({
  boardSize = 3,
  initialPlayer = "X",
  winningStreak = 3,
}) => {
  const [board, setBoard] = useState(Array(boardSize * boardSize).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(initialPlayer);
  const [winner, setWinner] = useState<string | null>(null);

  useEffect(() => {
    if (winner) return;
    setWinner(checkWinner(board, boardSize, winningStreak));
  }, [board, boardSize, winner, winningStreak]);

  const handleSquareClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const resetGame = () => {
    setBoard(Array(boardSize * boardSize).fill(null));
    setCurrentPlayer(initialPlayer);
    setWinner(null);
  };

  const renderSquare = (index: number) => (
    <button
      onClick={() => handleSquareClick(index)}
      style={{
        width: `${300 / boardSize}px`,
        height: `${300 / boardSize}px`,
        fontSize: "24px",
        margin: "2px",
      }}
      key={index}
    >
      {board[index]}
    </button>
  );

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Tic Tac Toe</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${boardSize}, auto)`,
          justifyContent: "center",
        }}
      >
        {board.map((_, index) => renderSquare(index))}
      </div>
      {winner ? (
        <div>
          <h3>Winner: {winner}</h3>
          <button onClick={resetGame}>Play Again</button>
        </div>
      ) : (
        <h3>Next Player: {currentPlayer}</h3>
      )}
    </div>
  );
};
