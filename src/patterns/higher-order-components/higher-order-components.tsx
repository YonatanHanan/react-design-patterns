import { HigherOrderComponentsGood } from "./good";
import { HigherOrderComponentsBad } from "./bad";

export const HigherOrderComponents = () => {
  return (
    <div>
      <HigherOrderComponentsBad />
      <HigherOrderComponentsGood />
    </div>
  );
};
