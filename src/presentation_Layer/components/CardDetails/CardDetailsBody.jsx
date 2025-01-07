
import { Carrousel } from "./Carrousel";
import { Dropdown } from "./Dropdown";
import styles from "./CardDetailsBody.module.scss";
import { MainSection } from "./MainSection";

export const CardDetailsBody = () => {


  return (
    <main id="main">
      <Carrousel></Carrousel>
      <MainSection></MainSection>

      <div id="Details">
        <Dropdown>
          <h2>Description</h2>
        </Dropdown>
        <Dropdown>
          <h2>Équipements</h2>
        </Dropdown>
      </div>
    </main>
  );
};
