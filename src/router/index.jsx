import { createBrowserRouter } from "react-router-dom";

import Login from "../page/Login";
import AddInfo from "../page/AddInfo";
import Auth from "../page/Auth";
import ListInfo from "../page/ListInfo";
import Register from "../page/Register";
import UpdateInfo from "../page/UpdateInfo";
import Layout from "../components/Layout";
import LayoutAuth from "../components/LayoutAuth";
import Error404Page from "../page/Error404Page";
import Demo from "../page/Demo";
import Qrcode from "../page/Qrcode";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error404Page />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/:username",
        element: <Demo />,
      },
      {
        path: "/qrcode",
        element: <Qrcode />,
      },
      {
        path: "/",
        element: <LayoutAuth />,
        errorElement: <Error404Page />,
        children: [
          {
            path: "/",
            element: <ListInfo />,
          },
          {
            path: "/add-info",
            element: <AddInfo />,
          },
          {
            path: "/profile",
            element: <Auth />,
          },

          {
            path: "/info",
            element: <ListInfo />,
          },
          {
            path: "info/:id",
            element: <UpdateInfo />,
          },
        ],
      },
    ],
  },
  { basename: "/zapps/[ZALO_MINI_APP_ID]" },
]);
