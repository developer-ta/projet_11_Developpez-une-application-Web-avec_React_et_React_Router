import { useState } from "react";

 import "./presentation_Layer/styles/App.css";
import { RouterProvider } from "react-router-dom";
import routerConfig from "./presentation_Layer/router";

function App() {
  const [count, setCount] = useState(0);

  // console.log('navigate: ', navigate);
  return (
    <>
      
      <RouterProvider router={routerConfig} />
    </>
  );
}

export default App;
