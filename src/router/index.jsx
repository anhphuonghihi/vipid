import { createBrowserRouter } from "react-router-dom";

import Login from "../page/Login";

const user = false;
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <div>Hello world!</div>,
  },
]);
