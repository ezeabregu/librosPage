import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ContainerStyled,
  HeaderModalCarrito,
  TituloModal,
  ContenedorBotonCerrarModal,
  CarritoVacio,
  ContainerCarrito,
  ContainerTotal,
  ContainerTitulo,
  ContainerSubtotalStyled,
  ContainerWrapper,
  BotonTrash,
} from "./modalCarritoStyles";
import { MdOutlineClose } from "react-icons/md";
import { BsExclamationCircle } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { AnimatePresence } from "framer-motion";
import { ModalOverlayStyled } from "../navbarStyles";
import { formatoPrecio } from "../../../utils/formatoPrecio";
import ButtonDefect from "../../ButtonDefect/ButtonDefect";
import TarjetaLibro from "./TarjetaLibro";
import {
  limpiarCarrito,
  toggleOcultarCarrito,
} from "../../../redux/carrito/carritoSlice";
import { useNavigate } from "react-router-dom";

const ModalCarrito = () => {
  const ocultarCarrito = useSelector((state) => state.cart.hidden);
  const { cartItems, shippingCost } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (!ocultarCarrito) {
      dispatch(toggleOcultarCarrito());
    }
  }, [dispatch]);

  const precioTotal = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  return (
    <>
      {!ocultarCarrito && (
        <ModalOverlayStyled
          onClick={() => dispatch(toggleOcultarCarrito())}
          isHidden={ocultarCarrito}
        />
      )}
      <AnimatePresence>
        {!ocultarCarrito && (
          <ContainerStyled
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ type: "spring", damping: 27 }}
            key="cart-modal"
          >
            <HeaderModalCarrito>
              <TituloModal>
                <h2>Carrito de compras</h2>
                <ContenedorBotonCerrarModal
                  onClick={() => dispatch(toggleOcultarCarrito())}
                >
                  <MdOutlineClose size="24px" />
                </ContenedorBotonCerrarModal>
              </TituloModal>
            </HeaderModalCarrito>
            <ContainerCarrito>
              <ContainerTitulo>
                <h4>Tus productos:</h4>
                <BotonTrash disabled={!cartItems.length}>
                  <BsTrash
                    id="vaciarCarrito"
                    className="vaciarCarr"
                    onClick={() => {
                      if (window.confirm("Desea vaciar el carrito?") === true) {
                        dispatch(limpiarCarrito());
                        dispatch(toggleOcultarCarrito());
                      }
                    }}
                  />
                </BotonTrash>
              </ContainerTitulo>
              <ContainerWrapper>
                {cartItems.length ? (
                  cartItems.map((item) => {
                    return <TarjetaLibro {...item} key={item.id} />;
                  })
                ) : (
                  <CarritoVacio>
                    <BsExclamationCircle fill="var(--rojo)" />
                    El carrito de compras está vacío.
                  </CarritoVacio>
                )}
              </ContainerWrapper>
            </ContainerCarrito>
            <ContainerTotal>
              <ContainerSubtotalStyled>
                <h5>Subtotal: {formatoPrecio(precioTotal)}</h5>
                <h5>Costo de envio: {formatoPrecio(shippingCost)}</h5>
              </ContainerSubtotalStyled>
              <h3>Total: {formatoPrecio(precioTotal + shippingCost)}</h3>
              <ButtonDefect
                onClick={() => {
                  // if (window.confirm("Confirmar la compra?") === true) {
                  navigate("/login");
                  dispatch(toggleOcultarCarrito());
                  // dispatch(limpiarCarrito());
                  window.location.reload();
                  // }
                }}
                disabled={!cartItems.length}
              >
                INICIAR COMPRA
              </ButtonDefect>
            </ContainerTotal>
          </ContainerStyled>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCarrito;
