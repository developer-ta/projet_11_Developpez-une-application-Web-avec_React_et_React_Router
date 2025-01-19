import styles from "../common/Dropdown.module.scss";
import arrowBack from "../../assets/arrowBack.svg";
import { useShowDescription } from "../../hooks/useShowDescription";

export const Dropdown = ({ type, details, width }) => {

  const { isVisibleDescription, isVisibleEquipment, openDetail } =
    useShowDescription();

  if (type === "Équipements") {
    return (
      <div className={styles["container-dropdown"] + " " + styles[width]}>
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
//Description
  return (
    <div className={styles["container-dropdown"] + " " + styles[width]}>
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
