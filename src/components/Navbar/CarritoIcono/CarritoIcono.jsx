import React from "react";
import { NavLinkStyled } from "../navbarStyles";
import { FaShoppingCart } from "react-icons/fa";
import { toggleOcultarCarrito } from "../../../redux/carrito/carritoSlice";
import { useDispatch, useSelector } from "react-redux";

const CarritoIcono = () => {
  const dispatch = useDispatch();

  const totalCartItems = useSelector((state) => state.cart.cartItems).reduce(
    (acc, item) => (acc += item.quantity),
    0
  );

  return (
    <NavLinkStyled onClick={() => dispatch(toggleOcultarCarrito())}>
      <FaShoppingCart />
      <span>{totalCartItems}</span>
    </NavLinkStyled>
  );
};

export default CarritoIcono;
