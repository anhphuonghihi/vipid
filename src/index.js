import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Provider } from "react-redux";
import { store, persistedStore } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "./setPublicPath.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);
const host = window.location.host;
console.log(host);
const root =
  host === "h5.zdn.vn"
    ? ReactDOM.createRoot(document.getElementById("app"))
    : ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistedStore}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
