import React from "react";
import { LinkContainerStyled } from "./menuBurgerStyles";
import { NavLinkStyled } from "../navbarStyles";
import { CartLinkStyled } from "../navbarStyles";
import CarritoIcono from "../CarritoIcono/CarritoIcono";
import { useDispatch, useSelector } from "react-redux";
import { toggleOcultarCarrito } from "../../../redux/carrito/carritoSlice";
import { toggleOcultarMenuBurger } from "../../../redux/menuBurger/menuBurgerSlice";
import { useEffect } from "react";
import { FaUser } from "react-icons/fa";

const MenuBurger = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  const ocultarCarrito = useSelector((state) => state.cart.hidden);
  const dispatch = useDispatch();

  const ocultarMenuBurger = useSelector((state) => state.menuBurger.hidden);

  useEffect(() => {
    if (!ocultarMenuBurger) {
      dispatch(toggleOcultarMenuBurger());
    }
  }, [dispatch, ocultarMenuBurger]);

  return (
    <>
      {ocultarMenuBurger && (
        <LinkContainerStyled>
          <NavLinkStyled to="/acerca" onClick={() => ocultarMenuBurger()}>
            Sobre Nosotros
          </NavLinkStyled>
          <NavLinkStyled to="/productos" onClick={() => ocultarMenuBurger()}>
            Libros
          </NavLinkStyled>
          <NavLinkStyled to="/contacto" onClick={() => ocultarMenuBurger()}>
            Contacto
          </NavLinkStyled>
          <NavLinkStyled to="/login" onClick={() => ocultarMenuBurger()}>
            <FaUser />
            {currentUser ? `${currentUser.name}` : "Ingresá"}
          </NavLinkStyled>
          <CartLinkStyled>
            <CarritoIcono
              ocultarCarrito={ocultarCarrito}
              onClick={() => {
                dispatch(toggleOcultarCarrito(), ocultarMenuBurger());
              }}
            />
          </CartLinkStyled>
        </LinkContainerStyled>
      )}
    </>
  );
};

export default MenuBurger;
