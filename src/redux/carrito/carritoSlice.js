import { createSlice } from "@reduxjs/toolkit";
import { agregarCarrito, borrarCarrito, resetCostoEnvio } from "./carritoUtils";
import { SHIPPING_COST } from "../../utils/constants";

const INITIAL_STATE = {
  cartItems: [],
  shippingCost: 0,
  hidden: true,
};

const carritoSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    agregar: (state, action) => {
      return {
        ...state,
        cartItems: agregarCarrito(state.cartItems, action.payload),
        shippingCost: SHIPPING_COST,
      };
    },
    borrar: (state, action) => {
      return {
        ...state,
        cartItems: borrarCarrito(state.cartItems, action.payload),
        shippingCost: resetCostoEnvio(state.cartItems, SHIPPING_COST),
      };
    },
    limpiarCarrito: (state) => {
      return { ...state, cartItems: [], shippingCost: 0 };
    },
    toggleOcultarCarrito: (state) => {
      return { ...state, hidden: !state.hidden };
    },
  },
});

export const { agregar, borrar, limpiarCarrito, toggleOcultarCarrito } =
  carritoSlice.actions;

export default carritoSlice.reducer;
