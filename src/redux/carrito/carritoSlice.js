import { createSlice } from "@reduxjs/toolkit";
import { agregarCarrito, borrarCarrito, resetCostoEnvio } from "./carritoUtils";
import { SHIPPING_COST } from "../../utils/constants";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  costoEnvio: 0,
};

const carritoSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    agregar: (state, action) => {
      return {
        ...state,
        cartItems: agregarCarrito(state.cartItems, action.payload),
        costoEnvio: SHIPPING_COST,
      };
    },
    borrar: (state, action) => {
      return {
        ...state,
        cartItems: borrarCarrito(state.cartItems, action.payload),
        costoEnvio: resetCostoEnvio(state.cartItems, SHIPPING_COST),
      };
    },
    limpiarCarrito: (state) => {
      return { ...state, cartItems: [], costoEnvio: 0 };
    },
    toggleOcultarCarrito: (state) => {
      return { ...state, hidden: !state.hidden };
    },
  },
});

export const { agregar, borrar, limpiarCarrito, toggleOcultarCarrito } =
  carritoSlice.actions;

export default carritoSlice.reducer;
