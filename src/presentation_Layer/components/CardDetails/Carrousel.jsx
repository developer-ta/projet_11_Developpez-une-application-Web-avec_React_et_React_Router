import styles from "./CardDetailsBody.module.scss";
import  arrowLeft  from "../../assets/arrowLeft.svg";
import arrowForward from "../../assets/arrowForward.svg";

import { useImageCarousel } from "../../hooks/useImageCarousel";

export const Carrousel = ({ cover, pictures }) => {
  const { turnImgHandler, imag, isSingleImg, currentImgNumber } =
    useImageCarousel(cover, pictures);

  return (
    <div id={styles["carrousel"]}>
      <img src={imag} alt="cover_photo" />

      <div className={styles["arrow-carrousel"]}>
        <img
          src={arrowLeft}
          alt="icon"
          className={isSingleImg ? styles["hidden"] : styles["arrowBack"]}
          onClick={() => turnImgHandler(-1)}
        />

        <img
          src={arrowForward}
          alt="icon"
          className={isSingleImg ? styles["hidden"] : styles["arrowBack"]}
          onClick={() => turnImgHandler(1)}
        />
      </div>
      <p className={styles["numeration"]}>
        {currentImgNumber.current}/{pictures.length}
      </p>
    </div>
  );
};
