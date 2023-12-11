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
} from "./modalCarritoStyles";
import { MdOutlineClose } from "react-icons/md";
import { BsExclamationCircle } from "react-icons/bs";
import { AnimatePresence } from "framer-motion";
import { ModalOverlayStyled } from "../navbarStyles";

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
              <ContainerTitulo></ContainerTitulo>
              {/* <CarritoVacio>
                <BsExclamationCircle fill="var(--rojo)" />
                El carrito de compras está vacío.
              </CarritoVacio> */}
            </ContainerCarrito>
            <ContainerTotal></ContainerTotal>
          </ContainerStyled>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCarrito;
