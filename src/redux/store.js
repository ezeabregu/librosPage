import { combineReducers, configureStore } from "@reduxjs/toolkit";
import destacadosReducer from "./destacados/destacadosSlice";
import carritoReducer from "./carrito/carritoSlice";
import menuBurgerReducer from "./menuBurger/menuBurgerSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import userReducer from "./user/userSlice";

const reducers = combineReducers({
  destacados: destacadosReducer,
  cart: carritoReducer,
  menuBurger: menuBurgerReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
