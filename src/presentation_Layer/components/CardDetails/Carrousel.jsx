import styles from "./CardDetailsBody.module.scss";
import  arrowLeft  from "../../assets/arrowLeft.svg";
import arrowForward  from "../../assets/arrowForward.svg";
import { useCallback, useMemo, useRef, useState } from "react";

export const Carrousel = ({ cover, pictures }) => {
  const index = useRef(0);
  const [imag, setImg] = useState(cover);
  console.log("imag: ", imag);

  const turnImgHandler = useCallback((arg) => {
    const maxIndex = pictures.length - 1;

    index.current += arg;
    console.log("index: ", index.current);

    if (index.current > maxIndex) {
      index.current = 0;
    } else if (index.current < 0) {
      index.current = maxIndex;
    }
    setImg(pictures[index.current]);
  });

  return (
    <div id={styles["carrousel"]}>
      <img src={imag} alt="cover_photo" />

      <div className={styles["arrow-carrousel"]}>
        <img
          src={arrowLeft}
          alt="icon"
          className={styles["arrowBack"]}
          onClick={() => turnImgHandler(-1)}
        />
        <img
          src={arrowForward}
          alt="icon"
          className={styles["arrowForward"]}
          onClick={() => turnImgHandler(1)}
        />
      </div>
    </div>
  );
};
