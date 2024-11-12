import { ExpensiveComponent } from "../../common/ExpensiveComponent/ExpensiveComponent";
import { withPerformanceLogger } from "./performance-hoc";

const ExpensiveComponentWithLogger = withPerformanceLogger(ExpensiveComponent);

const ExampleComponent: React.FC = () => {
  return <div>Example Component Loaded</div>;
};
const ExampleComponentWithLogger = withPerformanceLogger(ExampleComponent);

export const HigherOrderComponentsGood = () => {
  return (
    <div>
      <ExpensiveComponentWithLogger />
      <ExampleComponentWithLogger />
    </div>
  );
};
