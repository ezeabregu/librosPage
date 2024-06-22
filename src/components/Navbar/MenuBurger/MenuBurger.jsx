import React from "react";
import { LinkContainerStyled } from "./menuBurgerStyles";
import { NavLinkStyled } from "../navbarStyles";
import { CartLinkStyled } from "../navbarStyles";
import CarritoIcono from "../CarritoIcono/CarritoIcono";
import { useDispatch, useSelector } from "react-redux";
import { toggleOcultarCarrito } from "../../../redux/carrito/carritoSlice";
import { toggleOcultarMenuBurger } from "../../../redux/menuBurger/menuBurgerSlice";
import { useEffect } from "react";

const MenuBurger = () => {
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
          <NavLinkStyled
            to="/productos"
            onClick={() => dispatch(toggleOcultarMenuBurger())}
          >
            Libros
          </NavLinkStyled>
          <NavLinkStyled
            to="/contacto"
            onClick={() => dispatch(toggleOcultarMenuBurger())}
          >
            Contacto
          </NavLinkStyled>
          <NavLinkStyled
            to="/login"
            onClick={() => dispatch(toggleOcultarMenuBurger())}
          >
            Ingresá
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
