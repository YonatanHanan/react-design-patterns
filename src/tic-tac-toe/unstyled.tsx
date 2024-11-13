import { ReactNode } from "react";
import useTicTacToe from "./hook/useTicTacToe";

type UnstyledTicTacToeProps = {
  boardSize: number;
  initialPlayer: "X" | "O";
  winningStreak: number;

  children: ({
    board,
    currentPlayer,
    handleSquareClick,
    resetGame,
    winner,
  }: ReturnType<typeof useTicTacToe>) => ReactNode;
};

export const UnstyledTicTacToe = ({
  boardSize = 3,
  initialPlayer = "X",
  winningStreak = 3,
  children,
}: UnstyledTicTacToeProps) => {
  const { board, currentPlayer, winner, handleSquareClick, resetGame } =
    useTicTacToe({
      boardSize,
      initialPlayer,
      winningStreak,
    });

  return children({
    board,
    currentPlayer,
    handleSquareClick,
    resetGame,
    winner,
  });
};
