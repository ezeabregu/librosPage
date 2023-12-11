import React from "react";
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
} from "./modalCarritoStyles";
import { MdOutlineClose } from "react-icons/md";
import { BsExclamationCircle } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { AnimatePresence } from "framer-motion";
import { ModalOverlayStyled } from "../navbarStyles";
import { formatoPrecio } from "../../../utils/formatoPrecio";
import Button from "../../Button/Button";

const ModalCarrito = ({ ocultarCarrito, setOcultarCarrito }) => {
  return (
    <>
      {!ocultarCarrito && (
        <ModalOverlayStyled
          onClick={() => setOcultarCarrito(!ocultarCarrito)}
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
                  onClick={() => setOcultarCarrito(!ocultarCarrito)}
                >
                  <MdOutlineClose size="24px" />
                </ContenedorBotonCerrarModal>
              </TituloModal>
            </HeaderModalCarrito>
            <ContainerCarrito>
              <ContainerTitulo>
                <h4>Tus productos:</h4>
                <BsTrash id="vaciarCarrito" className="vaciarCarr" />
              </ContainerTitulo>
              {/* <CarritoVacio>
                <BsExclamationCircle fill="var(--rojo)" />
                El carrito de compras está vacío.
              </CarritoVacio> */}
            </ContainerCarrito>
            <ContainerTotal>
              <ContainerSubtotalStyled>
                <h5>Subtotal: {formatoPrecio(4000)}</h5>
                <h5>Costo de envio: {formatoPrecio(1000)}</h5>
              </ContainerSubtotalStyled>
              <h3>Total: {formatoPrecio(5000)}</h3>
              <Button>INICIAR COMPRA</Button>
            </ContainerTotal>
          </ContainerStyled>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCarrito;
