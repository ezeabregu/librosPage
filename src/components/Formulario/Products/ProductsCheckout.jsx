import React from "react";
import {
  ContainerWrapperCheckout,
  CheckOutUserStyled,
  ContainerTotalCheckout,
  Separador,
  TituloSubtotal,
} from "./productsCheckoutStyles";
import TarjetaLibro from "../../Navbar/ModalCarrito/TarjetaLibro";
import { formatoPrecio } from "../../../utils/formatoPrecio";

const ProductsCheckout = ({ cartItems, shippingCost, price }) => {
  return (
    <>
      {cartItems.length ? (
        <>
          <ContainerWrapperCheckout>
            {cartItems.length
              ? cartItems.map((item) => {
                  return <TarjetaLibro {...item} key={item.id} />;
                })
              : null}
          </ContainerWrapperCheckout>
          <ContainerTotalCheckout>
            <TituloSubtotal>Subtotal:</TituloSubtotal>
            <span>{formatoPrecio(price)}</span>
            <TituloSubtotal>Costo de envío:</TituloSubtotal>
            <span>{formatoPrecio(shippingCost)}</span>
            <Separador></Separador>
            <p>Total:</p>
            <span>{formatoPrecio(price + shippingCost)}</span>
          </ContainerTotalCheckout>
        </>
      ) : (
        <CheckOutUserStyled>
          Aún no has realizado ninguna compra...
        </CheckOutUserStyled>
      )}
    </>
  );
};

export default ProductsCheckout;
