/* eslint-disable no-empty */
import styles from "./ExpensiveComponent.module.css";

export const ExpensiveComponent = () => {
  console.log("ExpensiveComponent");
  const expensiveOperation = () => {
    const start = Date.now();
    while (Date.now() - start < 2000) {}
  };

  expensiveOperation();

  console.log("ExpensiveComponent - return");

  return <div className={styles.wrapper}>that took too long</div>;
};
