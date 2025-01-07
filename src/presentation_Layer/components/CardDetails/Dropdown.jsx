import styles from "./CardDetailsBody.module.scss";

export const Dropdown = ({ children }) => {
  return (
    <div id={styles["dropdown"]}>
      {children}
      <img
        src="src/presentation_Layer/assets/arrowBack.svg"
        alt="icon"
        srcset=""
        className={styles["arrow"]}
      />
    </div>
  );
};
