import { createBrowserRouter } from "react-router-dom";

import Root from "../pages";
import Dashboard from "./../pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [],
      },
    ],
  },
]);

export default router;
