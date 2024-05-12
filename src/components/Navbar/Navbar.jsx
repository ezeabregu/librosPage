import React from "react";
import {
  NavbarStyled,
  LinkContainer,
  NavLinkStyled,
  CartLinkStyled,
  BurgerMenu,
} from "./navbarStyles";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import ModalCarrito from "./ModalCarrito/ModalCarrito";
import CarritoIcono from "./CarritoIcono/CarritoIcono";
import { useDispatch, useSelector } from "react-redux";
import { toggleOcultarCarrito } from "../../redux/carrito/carritoSlice";
import { useState } from "react";

const Navbar = () => {
  const ocultarCarrito = useSelector((state) => state.cart.hidden);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

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

        <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <CgClose style={{ fontSize: "2rem" }} />
          ) : (
            <GiHamburgerMenu style={{ fontSize: "2rem" }} />
          )}
        </BurgerMenu>
      </NavbarStyled>
    </>
  );
};

export default Navbar;
