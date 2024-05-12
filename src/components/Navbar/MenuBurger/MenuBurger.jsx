import React from "react";
import { LinkContainerStyled } from "./menuBurgerStyles";
import { NavLinkStyled } from "../navbarStyles";
import { CartLinkStyled } from "../navbarStyles";
import CarritoIcono from "../CarritoIcono/CarritoIcono";
import { useDispatch, useSelector } from "react-redux";
import { toggleOcultarCarrito } from "../../../redux/carrito/carritoSlice";

const MenuBurger = () => {
  const ocultarCarrito = useSelector((state) => state.cart.hidden);
  const dispatch = useDispatch();
  return (
    <LinkContainerStyled>
      <NavLinkStyled to="/acerca">Sobre Nosotros</NavLinkStyled>
      <NavLinkStyled to="/productos">Libros</NavLinkStyled>
      <NavLinkStyled to="/contacto">Contacto</NavLinkStyled>
      <NavLinkStyled to="/login">Ingresá</NavLinkStyled>
      <CartLinkStyled>
        <CarritoIcono
          ocultarCarrito={ocultarCarrito}
          onClick={() => dispatch(toggleOcultarCarrito())}
        />
      </CartLinkStyled>
    </LinkContainerStyled>
  );
};

export default MenuBurger;
