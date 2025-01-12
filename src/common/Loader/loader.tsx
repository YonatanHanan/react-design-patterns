import styles from "./loader.module.css"; // Import the CSS file

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles["loader-inner"]}></div>
    </div>
  );
};

export default Loader;
