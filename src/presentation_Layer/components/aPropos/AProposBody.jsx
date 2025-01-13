import { useState } from "react";
import styles from "./AProposBody.module.scss";
import { Dropdown } from "../common/Dropdown";
import { HeroSection } from "../common/HeroSection";

const listContent = [
  {
    type: "Fiabilité",
    details:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    type: "Respect",
    details:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    type: "Service",
    details:
      "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
  },

  {
    type: "Sécurité",
    details:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

export const AProposBody = () => {
  const [AProposData, SetData] = useState(listContent);

  return (
    <main id="main">
      <HeroSection
        sectionStyle={{
          height: "223px",
          backgroundImage:
            "url('/src/presentation_Layer/assets/imgApropos.jpg')",
        }}
        boxStyle={{ backdropFilter: "brightness(0.7)" }}
      >
       
      </HeroSection>
      <div id={styles["details"]}>
        {AProposData.map((data) => (
          <Dropdown
            details={data.details}
            type={data.type}
            width={{ width: "100%", margin: " 2% 0%" }}
          ></Dropdown>
        ))}
      </div>
    </main>
  );
};
