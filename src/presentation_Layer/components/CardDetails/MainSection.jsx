import styles from "./CardDetailsBody.module.scss";
import { useState } from "react";

export const MainSection = () => {
  const [AProposData, SetData] = useState({
    tagsText: ["Cozy", "Paris 10", "Canal"],
    rates: [1, 2, 3, 4, 5],
  });
  return (
    <>
      <section id={styles["union"]}>
        <div
          id={styles["group-1"]}
          className={styles["flex-row"] + styles["space-between"]}
        >
          <div className={styles["title"]}>
            <h2>Cozy loft on the Canal Saint-Martin</h2>
            <p>Paris, Île-de-France</p>
          </div>

          <div id={styles["host"]}>
            <p>
              Alexandre <br />
              Dumas
            </p>
            <span className={styles["circle"]}></span>
          </div>
        </div>

        <div id={styles["group-2"]}>
          <div id={styles["tags"]}>
            {AProposData.tagsText.map((el) => (
              <p>{el}</p>
            ))}
          </div>

          <div id={styles["rate"]}>
            {AProposData.rates.map((i) => (
              <img
                src="src/presentation_Layer/assets/star.svg"
                className="star"
              ></img>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
