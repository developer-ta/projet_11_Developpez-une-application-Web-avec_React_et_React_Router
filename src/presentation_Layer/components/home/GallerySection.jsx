import styles from "./HomeBody.module.scss";
import { Thumb } from "./ThumbLocation";

export const GallerySection = () => {
  const listCard = [1, 2, 3, 4, 5, 6];
  return (
    <section id={styles["gallery-section"]}>
      {/* <div className={styles['box-title']}>Chez vous, partout et ailleurs</div>
      <img src="src\presentation_Layer\assets\img_heroSection.jpg" alt="" /> */}
      <div id={styles["gallery"]}>
        {listCard.map((li) => (
          <Thumb></Thumb>
        ))}
      </div>
    </section>
  );
};
