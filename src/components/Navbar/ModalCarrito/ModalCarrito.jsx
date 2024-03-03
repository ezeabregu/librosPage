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
} from "./modalCarritoStyles";
import { MdOutlineClose } from "react-icons/md";
import { BsExclamationCircle } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { AnimatePresence } from "framer-motion";
import { ModalOverlayStyled } from "../navbarStyles";
import { formatoPrecio } from "../../../utils/formatoPrecio";
import Button from "../../Button/Button";
import TarjetaLibro from "./TarjetaLibro";
import {
  limpiarCarrito,
  toggleOcultarCarrito,
} from "../../../redux/carrito/carritoSlice";

const ModalCarrito = () => {
  const { cartItems, costoEnvio } = useSelector((state) => state.cart);
  const ocultarCarrito = useSelector((state) => state.cart.hidden);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!ocultarCarrito) {
      dispatch(toggleOcultarCarrito());
    }
  }, [dispatch, ocultarCarrito]);

  const precioTotal = cartItems.reduce((acc, item) => {
    return (acc += item.precio * item.cantidad);
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
            initial={{ traslateX: 600 }}
            animate={{ traslateX: 0 }}
            exit={{ traslateX: 600 }}
            transition={{ type: "spring", damping: 27 }}
            key="cart-modal"
          >
            <HeaderModalCarrito>
              <TituloModal>
                <h2>Carrito de compras</h2>
                <ContenedorBotonCerrarModal
                  whileTap={{ scale: 0.95 }}
                  onClick={() => dispatch(toggleOcultarCarrito())}
                >
                  <MdOutlineClose
                    size="24px"
                    onClick={() => dispatch(limpiarCarrito())}
                    disabled={!cartItems.legth}
                  />
                </ContenedorBotonCerrarModal>
              </TituloModal>
            </HeaderModalCarrito>
            <ContainerCarrito>
              <ContainerTitulo>
                <h4>Tus productos:</h4>
                <BsTrash id="vaciarCarrito" className="vaciarCarr" />
              </ContainerTitulo>
              <ContainerWrapper>
                {cartItems.legth ? (
                  cartItems.map((item) => (
                    <TarjetaLibro key={item.id} {...item} />
                  ))
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
                <h5>Costo de envio: {formatoPrecio(costoEnvio)}</h5>
              </ContainerSubtotalStyled>
              <h3>Total: {formatoPrecio(precioTotal + costoEnvio)}</h3>
              <Button>INICIAR COMPRA</Button>
            </ContainerTotal>
          </ContainerStyled>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCarrito;
