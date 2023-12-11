import React from "react";
import { ProductStyled } from "./productCardsStyles";
import Button from "../Button/Button";
import { GrBasket } from "react-icons/gr";
import { formatoPrecio } from "../../utils/formatoPrecio";

const Product = ({ img, title, price }) => {
  return (
    <ProductStyled>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>Precio: {formatoPrecio(price)}</p>
      <Button>
        COMPRAR <GrBasket />
      </Button>
    </ProductStyled>
  );
};

export default Product;
