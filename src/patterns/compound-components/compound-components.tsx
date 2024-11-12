import { CompoundComponentsGood } from "./good/good";
import { CompoundComponentsBad } from "./bad/bad";

export const CompoundComponents = () => {
  return (
    <div>
      <CompoundComponentsBad />
      <CompoundComponentsGood />
    </div>
  );
};
