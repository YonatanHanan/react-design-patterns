import { NestedPropForwardingBad } from "./bad/bad";
import { NestedPropForwardingGood } from "./good/good";

export const NestedPropForwarding = () => {
  return (
    <div>
      <NestedPropForwardingBad />
      <NestedPropForwardingGood />
    </div>
  );
};
