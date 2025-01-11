import { useCallback, useRef, useState } from "react";
import styles from "./CardDetailsBody.module.scss";
import arrowBack from "../../assets/arrowBack.svg";

export const Dropdown = ({ type, details }) => {
  // const refDescription = useRef();
  // const refEquipment = useRef();
  const [isVisibleDescription, setIsVisibleDescription] = useState(false);
  const [isVisibleEquipment, setIsVisibleEquipment] = useState(false);
  const openDetail = useCallback((type) => {
    if (type === "Équipements") {
      setIsVisibleEquipment((isVisible) => !isVisible);
    }
    setIsVisibleDescription((isVisible) => !isVisible);
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
            className={
              isVisibleEquipment
                ? styles["animation_open"]
                : styles["animation_close"]
            }
          />
        </div>

        <div
          className={
            isVisibleEquipment
              ? styles["animation_down"]
              : styles["hidden"]
          }
        >
          <ul className={styles["list-style"]}>
            {details.map((el) => (
              <li key={el}>{el}</li>
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
          className={
            isVisibleDescription
              ? styles["animation_open"]
              : styles["animation_close"]
          }
        />
      </div>

      <div
        className={
          isVisibleDescription
            ? styles["animation_down"]
            :styles["hidden"]
        }
      >
        <p className={styles["list-style"]}>{details}</p>
      </div>
    </div>
  );
};
