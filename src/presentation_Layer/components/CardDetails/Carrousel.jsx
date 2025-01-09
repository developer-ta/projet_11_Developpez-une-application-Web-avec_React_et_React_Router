import styles from "./CardDetailsBody.module.scss";
import  arrowLeft  from "../../assets/arrowLeft.svg";
import arrowForward  from "../../assets/arrowForward.svg";

export const Carrousel = ({ cover, pictures }) => {
  return (
    <div id={styles["carrousel"]}>
      <img src={cover} alt="cover_photo" />

      <div className={styles["arrow-carrousel"]}>
        <img src={arrowLeft} alt="icon" className={styles["arrowBack"]} />
        <img src={arrowForward} alt="icon" className={styles["arrowForward"]} />
      </div>
    </div>
  );
};
