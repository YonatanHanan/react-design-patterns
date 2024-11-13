import React, { useState } from "react";

// Type for the segmented control options
type SegmentedControlProps = {
  options: string[];
  onChange: (selectedOption: string) => void;
  selectedOption?: string;
};

export const Full = ({
  options,
  onChange,
  selectedOption,
}: SegmentedControlProps) => {
  const [selected, setSelected] = useState(selectedOption || options[0]);

  const handleClick = (option: string) => {
    setSelected(option);
    onChange(option);
  };

  return (
    <div style={styles.container}>
      {options.map((option) => (
        <div
          key={option}
          onClick={() => handleClick(option)}
          style={{
            ...styles.option,
            ...(selected === option ? styles.selected : {}),
          }}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

// Styles for the segmented control
const styles = {
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
