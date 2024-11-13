import { useState, useEffect } from "react";
import { checkWinner } from "../utils";

function useTicTacToe({
  boardSize = 3,
  initialPlayer = "X",
  winningStreak = 3,
}) {
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

  return {
    board,
    currentPlayer,
    winner,
    handleSquareClick,
    resetGame,
  };
}

export default useTicTacToe;
