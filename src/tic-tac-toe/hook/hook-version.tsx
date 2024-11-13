import useTicTacToe from "./useTicTacToe";

export const HooksTicTacToe = ({
  boardSize = 3,
  initialPlayer = "X",
  winningStreak = 3,
}) => {
  const { board, currentPlayer, winner, handleSquareClick, resetGame } =
    useTicTacToe({
      boardSize,
      initialPlayer,
      winningStreak,
    });

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
