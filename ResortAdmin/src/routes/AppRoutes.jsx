import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Staff from "../Components/Profile/Staff";
import Review from "../Components/Review/Review";
import RoomSet from "../Components/RoomSet/RoomSet";

import ProtectedRoute from "./ProtectedRoute";
import Quarry from "../Components/Quarries/Quarry";

const route = createBrowserRouter([

  {
    path: "/",
    element: (
      <div style={{ overflow: "hidden" }}>
        <Login />
      </div>
    ),
  },

  

  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/home",
        element: (
          <div style={{ overflow: "hidden" }}>
            <App />
          </div>
        ),
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "profile",
            element: <Staff />,
          },
          {
            path: "review",
            element: <Review />,
          },
          {
            path: "roomset",
            element: <RoomSet />,
          },
          {
            path: "quarry",
            element: <Quarry />,
          },
        ],
      },
    ],
  },
]);

export default route;