import { useCallback, useRef, useState } from "react";
import styles from "./CardDetailsBody.module.scss";
import arrowBack from "../../assets/arrowBack.svg";
import { useShowDescription } from "./../../hooks/useShowDescription";

export const Dropdown = ({ type, details }) => {
  // const refDescription = useRef();
  // const refEquipment = useRef();
  const { isVisibleDescription, isVisibleEquipment, openDetail } =
    useShowDescription();
  //  const [isVisibleDescription, setIsVisibleDescription] = useState(false);
  //  const [isVisibleEquipment, setIsVisibleEquipment] = useState(false);
  //  const openDetail = useCallback((type) => {
  //    if (type === "Équipements") {
  //      setIsVisibleEquipment((isVisible) => !isVisible);
  //    }
  //    setIsVisibleDescription((isVisible) => !isVisible);
  //  });

  if (type === "Équipements") {
    return (
      <div className={styles["container-dropdown"]}>
        <div id={styles["dropdown"]}>
          <h5>{type}</h5>
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
            isVisibleEquipment ? styles["animation_down"] : styles["hidden"]
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
        <h5>{type}</h5>
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
          isVisibleDescription ? styles["animation_down"] : styles["hidden"]
        }
      >
        <p className={styles["list-style"]}>{details}</p>
      </div>
    </div>
  );
};
