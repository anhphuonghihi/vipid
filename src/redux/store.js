import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import infoReducer from "./slice/infoSlice";
const persistConfig = {
  key: "iws",
  storage,
};

const persistAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistAuthReducer,
    info: infoReducer,
  },
  middleware: [thunk],
});

export const persistedStore = persistStore(store);
