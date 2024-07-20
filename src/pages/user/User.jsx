import React from "react";
import {
  UserContainerStyled,
  NameUserStyled,
  ContentUserAndVerify,
  VerifyUserStyled,
  CheckOutUserStyled,
  ContainerOrdersStyled,
  AccountVerifiedStyled,
  ContainerWrapperCheckout,
  ContainerTotalCheckout,
  ContainerSubtotalStyledCheckout,
} from "./userStyles";
import ButtonDefect from "../../components/ButtonDefect/ButtonDefect";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../redux/user/userSlice";
import { LinkButton } from "../../components/Hero/heroStyles";
import TarjetaLibro from "../../components/Navbar/ModalCarrito/TarjetaLibro";
import { formatoPrecio } from "../../utils/formatoPrecio";
import { Formik, Field, ErrorMessage } from "formik";
import CreditCard from "../../components/CreditCard/CreditCard";

const User = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const { cartItems, costoEnvio } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const precioTotal = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.cantidad);
  }, 0);

  return (
    <Formik>
      <UserContainerStyled>
        <ContentUserAndVerify>
          <NameUserStyled>{`Hola ${currentUser?.name}!!`}</NameUserStyled>
          <VerifyUserStyled>
            {currentUser.verified === true ? (
              <AccountVerifiedStyled>Cuenta verificada</AccountVerifiedStyled>
            ) : (
              <LinkButton to="/verify">¿Verificar cuenta?</LinkButton>
            )}
          </VerifyUserStyled>
        </ContentUserAndVerify>
        <ContainerOrdersStyled>
          {cartItems.length ? (
            <>
              <ContainerWrapperCheckout>
                {cartItems.length
                  ? cartItems.map((item) => {
                      return <TarjetaLibro {...item} key={item.id} />;
                    })
                  : null}
              </ContainerWrapperCheckout>
            </>
          ) : (
            <CheckOutUserStyled>
              Aún no has realizado ninguna compra...
            </CheckOutUserStyled>
          )}
          <ContainerTotalCheckout>
            <ContainerSubtotalStyledCheckout>
              <h5>Subtotal: {formatoPrecio(precioTotal)}</h5>
              <h5>Costo de envio: {formatoPrecio(costoEnvio)}</h5>
            </ContainerSubtotalStyledCheckout>
            <h3>Total: {formatoPrecio(precioTotal + costoEnvio)}</h3>
            <label>Ingrese los datos de la tarjeta a continuación</label>
            <CreditCard />

            <LinkButton to="" style={{ backgroundColor: "#252525" }}>
              Finalizar compra
            </LinkButton>
          </ContainerTotalCheckout>
        </ContainerOrdersStyled>
        <ButtonDefect
          onClick={() => {
            dispatch(setCurrentUser(null));
          }}
        >
          Cerrar sesión
        </ButtonDefect>
      </UserContainerStyled>
    </Formik>
  );
};

export default User;
