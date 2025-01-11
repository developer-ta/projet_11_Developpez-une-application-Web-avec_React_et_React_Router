import { useState } from "react";

import "./presentation_Layer/styles/App.scss";
import { RouterProvider } from "react-router-dom";
import routerConfig from "./presentation_Layer/router";

function App() {

  return (
    <>
      <RouterProvider router={routerConfig} />
    </>
  );
}

export default App;
