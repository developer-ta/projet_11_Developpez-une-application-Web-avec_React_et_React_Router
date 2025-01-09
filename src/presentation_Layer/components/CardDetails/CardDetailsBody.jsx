import { Carrousel } from "./Carrousel";
import { Dropdown } from "./Dropdown";
import styles from "./CardDetailsBody.module.scss";
import { MainSection } from "./MainSection";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const CardDetailsBody = () => {
  const { state } = useLocation();

  if (state) {
    const {
      id,
      title,
      cover,
      pictures,
      description,
      host,
      rating,
      location,
      equipments,
      tags,
    } = state;
    return (
      <main id="main">
        <Carrousel cover={cover} pictures={pictures}></Carrousel>

        <MainSection ></MainSection>

        <div id={styles["details"]}>
          <Dropdown type={description}>
            <h2>Description</h2>
          </Dropdown>
          <Dropdown type={equipments}>
            <h2>Équipements</h2>
          </Dropdown>
        </div>
      </main>
    );
  }
  return (
    <div>
      <h1> Loading ... </h1>
    </div>
  );
};
