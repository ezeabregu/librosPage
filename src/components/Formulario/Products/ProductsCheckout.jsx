import React from "react";
import {
  ContainerWrapperCheckout,
  CheckOutUserStyled,
  ContainerTotalCheckout,
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
            <p>Subtotal:</p>
            <span>{formatoPrecio(price)}</span>
            <p>Costo de envío:</p>
            <span>{formatoPrecio(shippingCost)}</span>
            <p>Subtotal:</p>
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
