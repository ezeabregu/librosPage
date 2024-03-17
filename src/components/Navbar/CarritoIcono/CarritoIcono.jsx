import React from "react";
import { NavLinkStyled } from "../navbarStyles";
import { FaShoppingCart } from "react-icons/fa";
import { toggleOcultarCarrito } from "../../../redux/carrito/carritoSlice";
import { useDispatch } from "react-redux";

const CarritoIcono = () => {
  const dispatch = useDispatch();

  return (
    <NavLinkStyled onClick={() => dispatch(toggleOcultarCarrito())}>
      <FaShoppingCart />
    </NavLinkStyled>
  );
};

export default CarritoIcono;
