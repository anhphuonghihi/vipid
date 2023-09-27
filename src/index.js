import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./icon.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Provider } from "react-redux";
import { store, persistedStore } from './redux/store';
import { PersistGate } from "redux-persist/integration/react";
import "./setPublicPath.js"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider  store={store}>
    <PersistGate persistor={persistedStore}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
