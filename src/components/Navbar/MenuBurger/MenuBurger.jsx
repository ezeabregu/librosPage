import React from "react";
import { LinkContainerStyled } from "./menuBurgerStyles";
import { NavLinkStyled } from "../navbarStyles";

const MenuBurger = () => {
  return (
    <LinkContainerStyled>
      <NavLinkStyled to="/acerca">Sobre Nosotros</NavLinkStyled>
      <NavLinkStyled to="/productos">Libros</NavLinkStyled>
      <NavLinkStyled to="/contacto">Contacto</NavLinkStyled>
      <NavLinkStyled to="/login">Ingresá</NavLinkStyled>
      {/* <CartLinkStyled>
            <CarritoIcono
            ocultarCarrito={ocultarCarrito}
            onClick={() => dispatch(toggleOcultarCarrito())}
            />
        </CartLinkStyled> */}
    </LinkContainerStyled>
  );
};

export default MenuBurger;
