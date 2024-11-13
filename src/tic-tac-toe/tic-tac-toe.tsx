import { DynamicTicTacToe } from "./dynamic";
import { HooksTicTacToe } from "./hook/hook-version";
import { SimpleTicTacToe } from "./simple";
import { UnstyledTicTacToe } from "./unstyled";

export const TicTacToe = () => {
  return (
    <div>
      <SimpleTicTacToe />

      <DynamicTicTacToe boardSize={4} initialPlayer="O" winningStreak={4} />

      <HooksTicTacToe />

      <UnstyledTicTacToe boardSize={3} initialPlayer="O" winningStreak={3}>
        {({ board, currentPlayer, handleSquareClick, resetGame, winner }) => {
          return (
            <>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${3}, auto)`,
                  justifyContent: "center",
                }}
              >
                {board.map((_, index) => {
                  return (
                    <button
                      onClick={() => handleSquareClick(index)}
                      style={{
                        width: `${300 / 3}px`,
                        height: `${300 / 3}px`,
                        fontSize: "24px",
                        margin: "2px",
                      }}
                      key={index}
                    >
                      {board[index]}
                    </button>
                  );
                })}
              </div>
              {winner ? (
                <div>
                  <h3>Winner: {winner}</h3>
                  <button onClick={resetGame}>Play Again</button>
                </div>
              ) : (
                <h3>Next Player: {currentPlayer}</h3>
              )}
            </>
          );
        }}
      </UnstyledTicTacToe>
    </div>
  );
};
