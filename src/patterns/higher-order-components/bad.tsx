import { useEffect, useRef } from "react";

export const HigherOrderComponentsBad = () => {
  const startTime = useRef(performance.now());

  useEffect(() => {
    const endTime = performance.now();
    const loadTime = endTime - startTime.current;
    console.log(`[ExampleComponent] Load time: ${loadTime.toFixed(2)}ms`);
  }, []);

  return <div>Example Component Loaded</div>;
};
