import React, { useEffect } from "react";

// Higher Order Component to log load time
export const withPerformanceLogger = <T extends object>(
  Component: React.ComponentType<T>
) => {
  return (props: T) => {
    const componentName =
      Component.displayName || Component.name || "Component";
    const startTime = performance.now();

    useEffect(() => {
      const endTime = performance.now();
      const loadTime = endTime - startTime;
      console.log(`[${componentName}] Load time: ${loadTime.toFixed(2)}ms`);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Component {...props} />;
  };
};
