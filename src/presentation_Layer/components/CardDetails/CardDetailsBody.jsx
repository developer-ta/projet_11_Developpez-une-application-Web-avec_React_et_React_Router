
import { Carrousel } from "./Carrousel";
import { Dropdown } from "./Dropdown";
import styles from "./CardDetailsBody.module.scss";
import { MainSection } from "./MainSection";
import { useState } from "react";

export const CardDetailsBody = () => {
  const [{ equipments, description }] = useState({
    equipments: [
      "Climatisation",
      "Wi-Fi",
      "Cuisine",
      "Espace de travail",
      "Fer à repasser",
      "Sèche-cheveux",
      "Cintres",
    ],
    description:
      "Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à la station de la gare de l'est (7 minutes à pied).",
  });
  
  return (
    <main id="main">
      <Carrousel></Carrousel>
      <MainSection></MainSection>

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
};
