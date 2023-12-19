import { createBrowserRouter } from "react-router-dom";

import Root from "./../pages/Index";
import Dashboard from "./../pages/Dashboard";
import Bar from "./../pages/Bar";
import Line from "./../pages/Line";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/bar-chart",
        element: <Bar />,
      },
      {
        path: "/dashboard/line-chart",
        element: <Line />,
      },
    ],
  },
]);

export default router;
