import { createBrowserRouter } from "react-router-dom";

import Login from "../page/Login";
import AddInfo from "../page/AddInfo";
import Auth from "../page/Auth";
import Background from "../page/Background";
import ForgotPassword from "../page/ForgotPassword";
import ListInfo from "../page/ListInfo";
import Register from "../page/Register";
import UpdateInfo from "../page/UpdateInfo";
import UpdatePassword from "../page/UpdatePassword";
import Layout from "../components/Layout";
import LayoutAuth from "../components/LayoutAuth";
import AddInfoId from "../page/AddInfoId";
import Error404Page from "../page/Error404Page";
import Demo from "../page/Demo";
import UpdateInfoName from "../page/UpdateInfoName";
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
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/contact/:username",
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
            path: "/background",
            element: <Background />,
          },

          {
            path: "/info",
            element: <ListInfo />,
          },
          {
            path: "info/:id",
            element: <UpdateInfo />,
          },
          {
            path: "info/name",
            element: <UpdateInfoName />,
          },
          {
            path: "info/add/:id",
            element: <AddInfoId />,
          },
          {
            path: "/edit-password",
            element: <UpdatePassword />,
          },
        ],
      },
    ],
  },
]);
