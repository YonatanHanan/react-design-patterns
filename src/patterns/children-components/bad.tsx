import { useState } from "react";
import { ExpensiveComponent } from "../../common/ExpensiveComponent/ExpensiveComponent";

export const ChildrenComponentsBad = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      <ExpensiveComponent />
    </div>
  );
};
