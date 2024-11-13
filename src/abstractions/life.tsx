import React, { useState } from "react";

// Type for the options and hook return values
type UseSegmentedControlOptions = {
  initialOption?: string;
  options: string[];
};

type UseSegmentedControlReturn = {
  selectedOption: string;
  selectOption: (option: string) => void;
};

// The custom hook
const useSegmentedControl = ({
  initialOption,
  options,
}: UseSegmentedControlOptions): UseSegmentedControlReturn => {
  const [selectedOption, setSelectedOption] = useState(
    initialOption || options[0]
  );

  const selectOption = (option: string) => {
    if (options.includes(option)) {
      setSelectedOption(option);
    } else {
      console.warn(`Option "${option}" not found in options list.`);
    }
  };

  return { selectedOption, selectOption };
};

type DropdownControlProps = {
  options: string[];
};

export const Life = ({ options }: DropdownControlProps) => {
  const { selectedOption, selectOption } = useSegmentedControl({ options });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    selectOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown-control">Choose an option: </label>
      <select
        id="dropdown-control"
        value={selectedOption}
        onChange={handleChange}
        style={styles.select}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

// Optional styling
const styles = {
  select: {
    padding: "8px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
};
