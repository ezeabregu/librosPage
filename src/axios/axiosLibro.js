import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { fetchOrdersSuccess } from "../redux/libros/librosSlice";

export const getLibros = async (dispatch) => {
  try {
    const libros = await axios.get(`${BASE_URL}/libros`);
    if (libros) {
      dispatch(fetchOrdersSuccess(libros.data.libros));
    }
  } catch (error) {
    console.log(error);
  }
};
