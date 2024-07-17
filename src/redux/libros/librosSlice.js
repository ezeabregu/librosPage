import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  getLibroslibros: null,
  getTotalLibros: 0,
};

export const librosSlice = createSlice({
  name: "libros",
  initialState: INITIAL_STATE,
  reducers: {
    getLibros: (state) => {
      return { ...state };
    },
    getTotalLibros: (state, action) => {
      return { ...state, totalDeLibros: action.payload };
    },
  },
});

export const { getLibros, getTotalLibros } = librosSlice.actions;
export default librosSlice.reducer;
