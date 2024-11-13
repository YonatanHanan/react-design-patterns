import { TicTacToeBoard } from "./types";

export const checkWinner = (
  board: TicTacToeBoard,
  size: number,
  streak: number
) => {
  const directions = [
    { row: 1, col: 0 }, // Vertical
    { row: 0, col: 1 }, // Horizontal
    { row: 1, col: 1 }, // Diagonal right
    { row: 1, col: -1 }, // Diagonal left
  ];

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const start = row * size + col;
      if (!board[start]) continue;

      for (const { row: rDir, col: cDir } of directions) {
        let count = 0;
        for (let i = 0; i < streak; i++) {
          const r = row + i * rDir;
          const c = col + i * cDir;
          if (
            r < 0 ||
            r >= size ||
            c < 0 ||
            c >= size ||
            board[r * size + c] !== board[start]
          ) {
            break;
          }
          count++;
        }
        if (count === streak) return board[start];
      }
    }
  }
  return null;
};
