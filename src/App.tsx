import { useState } from "react";

import { ChildrenComponents } from "./patterns/children-components/children-components";
import { CompoundComponents } from "./patterns/compound-components/compound-components";
import { ContainerPresentationComponents } from "./patterns/container-presentation-components/container-presentation-components";
import { CustomHooks } from "./patterns/custom-hooks/custom-hooks";
import { DataProviders } from "./patterns/data-providers/data-providers";
import { HigherOrderComponents } from "./patterns/higher-order-components/higher-order-components";
import { NestedPropForwarding } from "./patterns/nested-prop-forwarding/nested-prop-forwarding";
import { RefFunctionality } from "./patterns/ref-functionality/ref-functionality";
import { SingleResponsibilityPrinciple } from "./patterns/single-responsibility-principle/single-responsibility-principle";
import { VariantProps } from "./patterns/variant-props/variant-props";
import styles from "./app.module.css";
import { Abstractions } from "./abstractions/abstractions";
import { TicTacToe } from "./tic-tac-toe/tic-tac-toe";
import { CoolApis } from "./cool-apis/cool-apis";
import { UrlState } from "./url-state/url-state";

const chapters = [
  {
    title: "Single Responsibility Principle",
    component: <SingleResponsibilityPrinciple />,
  },
  {
    title: "Container and Presentation Components",
    component: <ContainerPresentationComponents />,
  },
  { title: "Compound Components", component: <CompoundComponents /> },
  { title: "Nested Prop Forwarding", component: <NestedPropForwarding /> },
  { title: "Children as a Function", component: <ChildrenComponents /> },
  { title: "Custom Hooks", component: <CustomHooks /> },
  { title: "Higher Order Components", component: <HigherOrderComponents /> },
  { title: "Variant Props", component: <VariantProps /> },
  { title: "Ref Functionality", component: <RefFunctionality /> },
  { title: "Data Providers", component: <DataProviders /> },
  { title: "Abstractions", component: <Abstractions /> },
  { title: "Abstractions - tic-tac-toe", component: <TicTacToe /> },
  { title: "Web worker", component: <CoolApis /> },
];

function App() {
  // return <UrlState />;
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

  const handleNext = () => {
    setCurrentChapterIndex((prevIndex) => (prevIndex + 1) % chapters.length);
  };

  const handlePrevious = () => {
    setCurrentChapterIndex(
      (prevIndex) => (prevIndex - 1 + chapters.length) % chapters.length
    );
  };

  return (
    <div>
      <h1>
        {currentChapterIndex}. {chapters[currentChapterIndex].title}
      </h1>
      {/* Navigation buttons */}
      <div className={styles.navigation}>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>

      <div className={styles.chapter}>
        <div>{chapters[currentChapterIndex].component}</div>
      </div>
    </div>
  );
}

export default App;
