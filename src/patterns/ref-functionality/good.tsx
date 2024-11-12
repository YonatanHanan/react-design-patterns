import { useState, useImperativeHandle, useRef, forwardRef } from "react";

// ForwardRef Component that exposes a `reset` method to the parent
const Component = forwardRef((_, ref: React.Ref<{ reset: () => void }>) => {
  const [count, setCount] = useState(0);

  // Exposes custom reset function to parent through ref to change state
  useImperativeHandle(ref, () => ({
    reset: () => {
      setCount(0);
    },
  }));

  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
});

export const RefFunctionalityGood = () => {
  const componentRef = useRef<{ reset: () => void }>(null);

  return (
    <>
      {/* Pass the ref directly to the component */}
      <Component ref={componentRef} />

      {/* Using the ref we can reset the inner state of Component */}
      <button onClick={() => componentRef.current?.reset()}>Reset</button>
    </>
  );
};
