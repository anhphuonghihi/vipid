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
import Error404Page from "../page/Error404Page";
const user = false;
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error404Page />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/add-info",
        element: <AddInfo />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/background",
        element: <Background />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/info",
        element: <ListInfo />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/edit-info",
        element: <UpdateInfo />,
      },
      {
        path: "/edit-password",
        element: <UpdatePassword />,
      },
      {
        path: "/dashboard",
        element: <div>Hello world!</div>,
      },
    ],
  },
]);
