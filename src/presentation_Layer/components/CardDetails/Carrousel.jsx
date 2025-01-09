import styles from "./CardDetailsBody.module.scss";

export const Carrousel = () => {
  return (
    <div id={styles["carrousel"]}>
      <div className={styles["arrow-carrousel"]}>
        {" "}
        <img
          src="src/presentation_Layer/assets/arrowLeft.svg"
          alt="icon"
          srcset=""
          className={styles["arrowBack"]}
        />
        <img
          src="src/presentation_Layer/assets/arrowForward.svg"
          alt="icon"
          srcset=""
          className={styles["arrowForward"]}
        />
      </div>
    </div>
  );
};
