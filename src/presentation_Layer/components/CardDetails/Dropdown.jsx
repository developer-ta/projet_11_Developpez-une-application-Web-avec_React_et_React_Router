import { useCallback, useRef, useState } from "react";
import styles from "./CardDetailsBody.module.scss";
import arrowBack from "../../assets/arrowBack.svg";

export const Dropdown = (props) => {
  const { type, details } = props;
  // const refDescription = useRef();
  // const refEquipment = useRef();
  const [isVisibleDescription, setIsVisibleDescription] = useState(true);
  const [isVisibleEquipment, setIsVisibleEquipment] = useState(true);
  const openDetail = useCallback((type) => {
    if (type === "Équipements") {
      setIsVisibleEquipment(!isVisibleEquipment);
    }
    setIsVisibleDescription(!isVisibleDescription);
  });

  if (type === "Équipements") {
    return (
      <div className={styles["container-dropdown"]}>
        <div id={styles["dropdown"]}>
          <h2>{type}</h2>
          <img
            onClick={() => openDetail(type)}
            src={arrowBack}
            alt="icon"
            className={styles["arrow"]}
          />
        </div>

        <div
          className={isVisibleEquipment ? styles["hidden"] : styles["visible"]}
        >
          <ul className={styles["list-style"]}>
            {details.map((el) => (
              <li>{el}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className={styles["container-dropdown"]}>
      <div id={styles["dropdown"]}>
        <h2>{type}</h2>
        <img
          onClick={(e) => openDetail(type)}
          src={arrowBack}
          alt="icon"
          className={styles["arrow"]}
        />
      </div>

      <div
        className={isVisibleDescription ? styles["hidden"] : styles["visible"]}
      >
        <p className={styles["list-style"]}>{details}</p>
      </div>
    </div>
  );
};
