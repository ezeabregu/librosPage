import React, { useState } from "react";
import {
  NavbarStyled,
  LinkContainer,
  NavLinkStyled,
  CartLinkStyled,
} from "./navbarStyles";
import ModalCarrito from "./ModalCarrito/ModalCarrito";
import CarritoIcono from "./CarritoIcono/CarritoIcono";

const Navbar = () => {
  const [ocultarCarrito, setOcultarCarrito] = useState(true);

  return (
    <>
      <NavbarStyled>
        <ModalCarrito
          ocultarCarrito={ocultarCarrito}
          setOcultarCarrito={setOcultarCarrito}
        />
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
              setOcultarCarrito={setOcultarCarrito}
            />
          </CartLinkStyled>
        </LinkContainer>
      </NavbarStyled>
    </>
  );
};

export default Navbar;
