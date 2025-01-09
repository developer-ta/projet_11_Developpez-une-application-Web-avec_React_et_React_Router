import { useCallback } from "react";
import styles from "./CardDetailsBody.module.scss";

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
          src="src/presentation_Layer/assets/arrowBack.svg"
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
