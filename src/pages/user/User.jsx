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
} from "./userStyles";
import ButtonDefect from "../../components/ButtonDefect/ButtonDefect";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../redux/user/userSlice";
import { LinkButton } from "../../components/Hero/heroStyles";
import TarjetaLibro from "../../components/Navbar/ModalCarrito/TarjetaLibro";
import { formatoPrecio } from "../../utils/formatoPrecio";
import { ErrorMessage, Formik, Field } from "formik";
// import CreditCard from "../../components/CreditCard/CreditCard";
import { limpiarCarrito } from "../../redux/carrito/carritoSlice";
import {
  ErrorStyled,
  InputStyled,
} from "../../components/Formulario/formularioStyles";
import { buyValues } from "../../formik/initialValues";
import { validationBuy } from "../../formik/validationSchema";
import ButtonForm from "../../components/ButtonForm/ButtonForm";
import { createOrder } from "../../axios/axiosOrder";

const User = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const { cartItems, costoEnvio } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const precioTotal = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.cantidad);
  }, 0);

  const total = precioTotal + costoEnvio;

  return (
    <Formik
      initialValues={buyValues}
      validationSchema={validationBuy}
      onSubmit={async (values) => {
        const orderData = {
          items: cartItems,
          precioTotal,
          costoEnvio,
          total,
          shippingDetails: { ...values },
        };
        try {
          await createOrder(orderData, dispatch, currentUser);
          dispatch(limpiarCarrito());
        } catch (error) {
          alert("Error al intentar crear la orden!");
        }
      }}
    >
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
          {cartItems.length ? (
            <ContainerTotalCheckout>
              <h3>Total: {formatoPrecio(precioTotal + costoEnvio)}</h3>
              {/* <label>Ingrese los datos de la tarjeta a continuación</label>
              <CreditCard /> */}

              <Field
                name="name"
                type="string"
                id="name"
                placeholder="Nombre - Apellido"
                as={InputStyled}
              ></Field>
              <ErrorMessage name="name" component={ErrorStyled}></ErrorMessage>

              <Field
                name="cellphone"
                type="number"
                id="cellphone"
                placeholder="+549 xxx xxx xxx"
                as={InputStyled}
              ></Field>
              <ErrorMessage
                name="cellphone"
                component={ErrorStyled}
              ></ErrorMessage>

              <Field
                name="location"
                type="string"
                id="location"
                placeholder="Localidad"
                as={InputStyled}
              ></Field>
              <ErrorMessage
                name="location"
                component={ErrorStyled}
              ></ErrorMessage>

              <Field
                name="address"
                type="string"
                id="address"
                placeholder="Dirección"
                as={InputStyled}
              ></Field>
              <ErrorMessage
                name="address"
                component={ErrorStyled}
              ></ErrorMessage>
              <ButtonForm>Finalizar compra</ButtonForm>
            </ContainerTotalCheckout>
          ) : null}
        </ContainerOrdersStyled>
        <ButtonDefect
          onClick={() => {
            dispatch(setCurrentUser(null));
            dispatch(limpiarCarrito());
          }}
        >
          Cerrar sesión
        </ButtonDefect>
      </UserContainerStyled>
    </Formik>
  );
};

export default User;
