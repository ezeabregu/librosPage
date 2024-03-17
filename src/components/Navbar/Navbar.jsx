import React from "react";
import {
  NavbarStyled,
  LinkContainer,
  NavLinkStyled,
  CartLinkStyled,
} from "./navbarStyles";
import ModalCarrito from "./ModalCarrito/ModalCarrito";
import CarritoIcono from "./CarritoIcono/CarritoIcono";
import { useDispatch, useSelector } from "react-redux";
import { toggleOcultarCarrito } from "../../redux/carrito/carritoSlice";

const Navbar = () => {
  const ocultarCarrito = useSelector((state) => state.cart.hidden);
  const dispatch = useDispatch();

  return (
    <>
      <NavbarStyled>
        <ModalCarrito />
        <NavLinkStyled to="/">
          <h3>PAGE</h3>
        </NavLinkStyled>
        <LinkContainer>
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
        </LinkContainer>
      </NavbarStyled>
    </>
  );
};

export default Navbar;
