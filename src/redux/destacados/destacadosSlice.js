import { createSlice } from "@reduxjs/toolkit";
import { destacadosRandom } from "../../utils/destacadosRandom";

const INITIAL_STATE = {
  destacados: destacadosRandom(5),
};

export const destacadosSlice = createSlice({
  name: "destacados",
  initialState: INITIAL_STATE,
  reducers: {
    aleatoriosDestacados: (state) => {
      return state;
    },
  },
});

export const { aleatoriosDestacados } = destacadosSlice.actions;

export default destacadosSlice.reducer;
