
import { ThumbLocation } from './ThumbLocation';
import styles from "./HomeBodySection.module.scss";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { fetchAllData } from "./../../../../infrastructure_Layer/api/fetchAllData";
import { useAppData } from "./../../../hooks/useAppData";

export const GallerySection = () => {
  const  appdata  = useAppData("public/data/logements.json");


  if (appdata) {
    return (
      <section id={styles["gallery-section"]}>
        <div id={styles["gallery"]}>
          {appdata.map((obj) => (
            <ThumbLocation
              key={obj.id}
              title={obj.title}
              cover={obj.cover}
              id={obj.id}
              refObjet={obj}
            ></ThumbLocation>
          ))}
        </div>
      </section>
    );
  }
  return (
    <div>
      <h1> Loading ... </h1>
    </div>
  );
};



