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
import MenuBurger from "./MenuBurger/MenuBurger";
import ModalCarrito from "./ModalCarrito/ModalCarrito";
import CarritoIcono from "./CarritoIcono/CarritoIcono";
import { useDispatch, useSelector } from "react-redux";
import { toggleOcultarCarrito } from "../../redux/carrito/carritoSlice";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  //const currentUser = useSelector((state) => state.user.currentUser);
  const currentUser = useSelector((state) => state.user.currentUser);

  const ocultarCarrito = useSelector((state) => state.cart.hidden);
  const dispatch = useDispatch();

  const ocultarMenuBurger = useSelector((state) => state.menuBurger.hidden);
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
          <NavLinkStyled to="/login">
            <span>
              <FaUser />
              {currentUser ? `${currentUser.name}` : "Ingresá"}
            </span>
          </NavLinkStyled>
          <CartLinkStyled>
            <CarritoIcono
              ocultarCarrito={ocultarCarrito}
              onClick={() => dispatch(toggleOcultarCarrito())}
            />
          </CartLinkStyled>
        </LinkContainer>

        <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
          {isOpen && ocultarMenuBurger ? (
            <CgClose style={{ fontSize: "2rem" }} />
          ) : (
            <GiHamburgerMenu style={{ fontSize: "2rem" }} />
          )}
        </BurgerMenu>
      </NavbarStyled>
      {isOpen ? <MenuBurger /> : null}
    </>
  );
};

export default Navbar;
