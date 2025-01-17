import { Carrousel } from "./Carrousel";

import styles from "./CardDetailsBody.module.scss";
import { MainSection } from "./MainSection";

import { useLocation } from "react-router-dom";
import { Dropdown } from "./../common/Dropdown";

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

        <MainSection
          tags={tags}
          rating={rating}
          title={title}
          location={location}
          host={host}
        ></MainSection>

        <div id={styles["details"]}>
          <Dropdown
            details={description}
            type={"Description"}
            width= "width"
          ></Dropdown>
          <Dropdown
            details={equipments}
            type={"Équipements"}
           width= "width"
          ></Dropdown>
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
