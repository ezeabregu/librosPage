import React from "react";
import { useDispatch } from "react-redux";
import { ProductStyled } from "./productCardsStyles";
import Button from "../Button/Button";

import { formatoPrecio } from "../../utils/formatoPrecio";
import { agregar } from "../../redux/carrito/carritoSlice";
import { motion } from "framer-motion";

const Product = ({ img, title, price, id }) => {
  const dispatch = useDispatch();

  return (
    <ProductStyled>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>Precio: {formatoPrecio(price)}</p>
      <motion.div>
        <Button
          onClick={() => {
            dispatch(agregar({ img, title, price, id }));
          }}
        ></Button>
      </motion.div>
    </ProductStyled>
  );
};

export default Product;
