import React from "react";
import { ProductStyled } from "./productCardsStyles";
import Button from "../Button/Button";
import { GrBasket } from "react-icons/gr";
import { formatoPrecio } from "../../utils/formatoPrecio";
import { useDispatch } from "react-redux";
import { agregar } from "../../redux/carrito/carritoSlice";

const Product = ({ img, title, price }) => {
  const dispatch = useDispatch();

  return (
    <ProductStyled>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>Precio: {formatoPrecio(price)}</p>
      <Button
        onClick={() => {
          dispatch(agregar({ img, title, price }));
        }}
      >
        COMPRAR <GrBasket />
      </Button>
    </ProductStyled>
  );
};

export default Product;
