import { useState } from "react";

const Component = ({
  count,
  increment,
  reset,
}: {
  count: number;
  increment: () => void;
  reset: () => void;
}) => {
  return (
    <div>
      {count}
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export const RefFunctionalityBad = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <Component count={count} increment={increment} reset={reset} />
    </>
  );
};
