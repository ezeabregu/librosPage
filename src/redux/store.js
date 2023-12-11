import { combineReducers, configureStore } from "@reduxjs/toolkit";
import destacadosReducer from "./destacados/destacadosSlice";
import cartReducer from "./cart/cartSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";

const reducers = combineReducers({
  destacados: destacadosReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
