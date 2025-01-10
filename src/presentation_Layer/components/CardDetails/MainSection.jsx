import styles from "./CardDetailsBody.module.scss";

import star from "../../assets/star.svg";

import { useRating } from "./../../hooks/useRating";

export const MainSection = ({ tags, rating, host,title,location }) => {
  const listImgStar = useRating(rating);


  return (
    <>
      <section id={styles["union"]}>
        <div
          id={styles["group-1"]}
          className={styles["flex-row"] + styles["space-between"]}
        >
          <div className={styles["title"]}>
            <h2>{title}</h2>
            <p>{location}</p>
          </div>

          <div id={styles["host"]}>
            <p>
             {host.name}
            </p>
            <div className={styles["circle"]}><img src={host.picture} alt="host picture" /></div>
          </div>
        </div>

        <div id={styles["group-2"]}>
          <div id={styles["tags"]}>
            {tags.map((el) => (
              <p key={el}>{el}</p>
            ))}
          </div>

          <div id={styles["rate"]}>
            {listImgStar.map((i) => (
              <img src={star} className="star" key={i}></img>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
