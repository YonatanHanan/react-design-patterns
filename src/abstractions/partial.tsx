import React, { useState } from "react";

// Type for the segmented control options and styles
type SegmentedControlProps = {
  options: string[];
  onChange: (selectedOption: string) => void;
  selectedOption?: string;
  styles?: {
    container?: React.CSSProperties;
    option?: React.CSSProperties;
    selected?: React.CSSProperties;
  };
};

export const Partial = ({
  options,
  onChange,
  selectedOption,
  styles = {},
}: SegmentedControlProps) => {
  const [selected, setSelected] = useState(selectedOption || options[0]);

  const handleClick = (option: string) => {
    setSelected(option);
    onChange(option);
  };

  return (
    <div style={{ ...defaultStyles.container, ...styles.container }}>
      {options.map((option) => (
        <div
          key={option}
          onClick={() => handleClick(option)}
          style={{
            ...defaultStyles.option,
            ...(selected === option
              ? { ...defaultStyles.selected, ...styles.selected }
              : {}),
            ...styles.option,
          }}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

// Default styles for the segmented control
const defaultStyles = {
  container: {
    display: "flex",
    border: "1px solid #ccc",
    borderRadius: "20px",
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
  },
  option: {
    padding: "10px 20px",
    cursor: "pointer",
    textAlign: "center" as const,
    flex: 1,
    transition: "background-color 0.3s",
  },
  selected: {
    backgroundColor: "#007bff",
    color: "white",
  },
};
