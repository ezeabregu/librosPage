import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  getLibros: null,
};

export const librosSlice = createSlice({
  name: "libros",
  initialState: INITIAL_STATE,
  reducers: {
    getLibros: (state) => {
      return { ...state };
    },
    fetchOrdersSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        error: null,
        libros: [...action.payload],
      };
    },
  },
});

export const { getLibros, fetchOrdersSuccess } = librosSlice.actions;
export default librosSlice.reducer;
