import { useEffect, useRef, useState } from "react";

export const InteractionIndicator = () => {
  const [isResponsive, setIsResponsive] = useState(true);
  const animationFrameHandler = useRef(-1);

  useEffect(() => {
    let lastTimestamp = Date.now();

    const checkResponsiveness = () => {
      const now = Date.now();
      const delay = now - lastTimestamp;

      // If the delay exceeds a threshold (e.g., 100ms), consider the page unresponsive
      if (delay > 100) {
        setIsResponsive(false);
      } else {
        setIsResponsive(true);
      }

      lastTimestamp = now;
      animationFrameHandler.current =
        requestAnimationFrame(checkResponsiveness); // Continue monitoring
    };

    // Start monitoring
    requestAnimationFrame(checkResponsiveness);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameHandler.current);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 10,
        right: 10,
        padding: "10px 20px",
        borderRadius: "8px",
        backgroundColor: isResponsive ? "green" : "red",
        color: "white",
        fontWeight: "bold",
      }}
    >
      {isResponsive ? "Page Responsive" : "Page Unresponsive"}
    </div>
  );
};
