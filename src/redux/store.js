import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import thunk from "redux-thunk";
import ContactReducer from "./slice/contactSlice";
import infoReducer from "./slice/infoSlice";
const persistConfig = {
  key: "iws",
  storage,
};

const persistAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistAuthReducer,
    contact: ContactReducer,
    info: infoReducer,
  },
  middleware: [thunk, logger],
});

export const persistedStore = persistStore(store);
