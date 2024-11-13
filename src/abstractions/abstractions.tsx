import { useState } from "react";
import { Full } from "./full";
import { Partial } from "./partial";
import { Life } from "./life";
import styles from "./abstractions.module.css";

const customStyles = {
  container: {
    backgroundColor: "#e9ecef",
  },
  option: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  selected: {
    backgroundColor: "#28a745",
    color: "white",
  },
};

const options = ["React", "Angular", "Vue"];

export const Abstractions = () => {
  const [selected, setSelected] = useState(options[0]);

  const onChange = (selected: string) => {
    setSelected(selected);
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <div>full</div>
        <Full options={options} onChange={onChange} selectedOption={selected} />
      </div>

      <div>
        <div>partial</div>
        <Partial
          options={options}
          onChange={onChange}
          selectedOption={selected}
          styles={customStyles}
        />
      </div>

      <div>
        <div>life</div>
        <Life options={options} />
      </div>
    </div>
  );
};
