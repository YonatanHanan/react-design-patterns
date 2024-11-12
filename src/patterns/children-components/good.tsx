import { useState } from "react";
import { ExpensiveComponent } from "../../common/ExpensiveComponent/ExpensiveComponent";

export const ChildrenComponentsGood = () => {
  return (
    <Component>
      {/* ✅ Expensive component will not re-render when Component does */}
      <ExpensiveComponent />
    </Component>
  );
};

// Component
function Component({ children }: React.PropsWithChildren) {
  const [count, setCount] = useState(0);

  // ✅ Children don't re-render when state changes
  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      {children}
    </div>
  );
}
