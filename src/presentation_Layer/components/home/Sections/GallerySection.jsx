
import { Thumb } from './ThumbLocation';
import styles from "./HomeBodySection.module.scss";
import { Link } from 'react-router-dom';




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
