import { ChildrenComponentsBad } from "./bad";
import { ChildrenComponentsGood } from "./good";

export const ChildrenComponents = () => {
  return (
    <div>
      <ChildrenComponentsBad />
      <ChildrenComponentsGood />
    </div>
  );
};
