import React from "react";
import { NavLinkStyled } from "../navbarStyles";
import { FaShoppingCart } from "react-icons/fa";

const CarritoIcono = ({ ocultarCarrito, setOcultarCarrito }) => {
  return (
    <NavLinkStyled onClick={() => setOcultarCarrito(!ocultarCarrito)}>
      <FaShoppingCart />
    </NavLinkStyled>
  );
};

export default CarritoIcono;
