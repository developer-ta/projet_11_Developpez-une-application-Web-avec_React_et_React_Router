
import { Thumb } from './ThumbLocation';
import styles from "./HomeBodySection.module.scss";
import { Link } from 'react-router-dom';
import { useState } from "react";

export const GallerySection = () => {
  const [listCard, setListCard] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <section id={styles["gallery-section"]}>
      <div id={styles["gallery"]}>
        {listCard.map((li) => (
          <Thumb></Thumb>
        ))}
      </div>
    </section>
  );
};
