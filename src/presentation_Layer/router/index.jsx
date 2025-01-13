import { createBrowserRouter } from "react-router-dom";
//page
import { Home } from "../pages/home/Home";
import { HomeBody } from "./../components/home/HomeBody";

import { APropos } from "./../pages/aPropos/APropos";
import { AProposBody } from "./../components/aPropos/AProposBody";
import { CardDetails } from "../pages/CardDetails/CardDetails";
import { CardDetailsBody } from "../components/CardDetails/CardDetailsBody";
import { NotFoundPage } from "../pages/notFoundPage/NotFoundPage";
import { NotFoundPageBody } from "../pages/notFoundPage/NotFoundPageBody";

const router = createBrowserRouter([
  // Home
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <HomeBody />,
      },
      {
        path: "home",
        element: <HomeBody />,
      },

      {
        path: "home/*",
        element: <HomeBody />,
      },
    ],
  },
  // APropos
  {
    path: "/a-propos",
    element: <APropos />,
    children: [
      {
        index: true,
        element: <AProposBody />,
      },
    ],
  },

  // CardDetail
  {
    path: "/cardDetail/:id",
    element: <CardDetails />,
    children: [
      {
        index: true,
        element: <CardDetailsBody />,
      },
    ],
  },
  //page 404
  {
    path: "/*",
    element: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <NotFoundPageBody />,
      },
    ],
  },
]);
export default router;
