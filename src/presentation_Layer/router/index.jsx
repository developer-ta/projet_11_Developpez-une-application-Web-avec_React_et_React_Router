import { createBrowserRouter } from "react-router-dom";
//page
import { Home } from "../pages/home/Home";
import { HomeBody } from "./../components/home/HomeBody";

import { FishLogementBody } from "../components/fishLogement/FishLogementBody";
import { FishLogement } from "./../pages/fishLogement/FishLogement";
import { NotFoundPage } from "./../pages/notFoundPage/NotFoundPage";
import { APropos } from "./../pages/aPropos/APropos";
import { AProposBody } from "./../components/aPropos/AProposBody";
import { CardDetails } from "../pages/CardDetails/CardDetails";
import { CardDetailsBody } from "../components/CardDetails/CardDetailsBody";

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
  // FishLogement
  {
    path: "/fishLogement",
    element: <FishLogement />,
    children: [
      {
        index: true,
        element: <FishLogementBody />,
      },
    ],
  },

  // CardDetail
  {
    path: "/CardDetail",
    element: <CardDetails />,
    children: [
      {
        index: true,
        element: <CardDetailsBody />,
      },
    ],
  },
  //default
  {
    path: "/*",
    element: <NotFoundPage />,
  },
]);
export default router;
