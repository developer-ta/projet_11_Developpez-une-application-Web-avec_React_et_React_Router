import { useState } from "react";
import { Carrousel } from "./Carrousel";
import { Dropdown } from "./Dropdown";

export const AProposBody = () => {
  const [AProposData, SetData] = useState({});
  

  return (
    <main id="main">
      <Carrousel></Carrousel>
      <div className="title">
        <h2>Cozy loft on the Canal Saint-Martin</h2>
        <p>Paris, Île-de-France</p>
      </div>
      <div id="host"></div>
      <div id="rate"></div>
      <div id="tags"></div>
      <div id="Details">
        <Dropdown></Dropdown>
        <Dropdown></Dropdown>
      </div>
    </main>
  );
};
