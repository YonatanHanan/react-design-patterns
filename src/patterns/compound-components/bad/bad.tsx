import { Toggle } from "./bad-base";

export const CompoundComponentsBad = () => {
  return (
    <Toggle
      button={"Toggle"}
      on={"The button is on"}
      off={"The button is off"}
    />
  );
};
