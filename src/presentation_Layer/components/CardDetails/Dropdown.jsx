import { useCallback } from "react";
import styles from "./CardDetailsBody.module.scss";
import arrowBack from "../../assets/arrowBack.svg"

export const Dropdown = (props) => {
  const { children, type } = props;

  useCallback(()=>{
    if (children === "Équipements") {
      const lis=type.map((el) =><li>{el}</li>)

    }
  })

  return (
    <>
      <div id={styles["dropdown"]}>
        {children}
        <img
          onClick={() => {}}
          src={arrowBack}
          alt="icon"
          className={styles["arrow"]}
        />
      </div>
      {/* { ? (
      )
      ) : (
        <p>{type}</p>
      )} */}
    </>
  );
};
