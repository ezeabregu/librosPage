import React from "react";
import { LinkContainerStyled } from "./menuBurgerStyles";
import { NavLinkStyled } from "../navbarStyles";
import { CartLinkStyled } from "../navbarStyles";
import CarritoIcono from "../CarritoIcono/CarritoIcono";
import { useDispatch, useSelector } from "react-redux";
import { toggleOcultarCarrito } from "../../../redux/carrito/carritoSlice";
import { toggleOcultarMenuBurger } from "../../../redux/menuBurger/menuBurgerSlice";

const MenuBurger = () => {
  const ocultarCarrito = useSelector((state) => state.cart.hidden);
  const dispatch = useDispatch();

  const ocultarMenuBurger = useSelector((state) => state.menuBurger.hidden);

  return (
    <LinkContainerStyled>
      <NavLinkStyled
        to="/acerca"
        ocultarMenuBurger={ocultarMenuBurger}
        onClick={() => dispatch(toggleOcultarMenuBurger())}
      >
        Sobre Nosotros
      </NavLinkStyled>
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
