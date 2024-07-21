import { combineReducers, configureStore } from "@reduxjs/toolkit";
import destacadosReducer from "./destacados/destacadosSlice";
import carritoReducer from "./carrito/carritoSlice";
import menuBurgerReducer from "./menuBurger/menuBurgerSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import userReducer from "./user/userSlice";
import librosReducer from "./libros/librosSlice";
import ordersReducer from "./orders/ordersSlice";

const reducers = combineReducers({
  destacados: destacadosReducer,
  cart: carritoReducer,
  menuBurger: menuBurgerReducer,
  user: userReducer,
  libros: librosReducer,
  orders: ordersReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
