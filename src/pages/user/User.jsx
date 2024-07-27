import React, { useState } from "react";
import {
  UserContainerStyled,
  NameUserStyled,
  ContentUserAndVerify,
  VerifyUserStyled,
  ContainerOrdersStyled,
  AccountVerifiedStyled,
  ContainerTotalCheckout,
  TitleCheckOut,
  Loading,
} from "./userStyles";
import ButtonDefect from "../../components/ButtonDefect/ButtonDefect";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../redux/user/userSlice";
import { LinkButton } from "../../components/Hero/heroStyles";
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
import ProductsCheckout from "../../components/Formulario/Products/ProductsCheckout";
import { clearOrders } from "../../redux/orders/ordersSlice";
import { useNavigate } from "react-router-dom";

const User = ({ cartItems, shippingCost }) => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const price = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  const [isLoading, setIsLoading] = useState(false);

  return (
    <Formik
      initialValues={buyValues}
      validationSchema={validationBuy}
      onSubmit={async (values) => {
        setIsLoading(true);
        const orderData = {
          price,
          shippingCost,
          total: price + shippingCost,
          shippingDetails: { ...values },
          items: cartItems,
        };
        try {
          await createOrder(orderData, dispatch, currentUser);
          dispatch(limpiarCarrito());
        } catch (error) {
          alert("Error al intentar crear la orden!");
        }
        setIsLoading(false);
      }}
    >
      <UserContainerStyled>
        <ContentUserAndVerify>
          <NameUserStyled>{`Hola ${currentUser?.name}!!`}</NameUserStyled>
          <VerifyUserStyled>
            <LinkButton to="/myorders">Mis órdenes</LinkButton>
            {currentUser.verified === true ? (
              <AccountVerifiedStyled>Cuenta verificada</AccountVerifiedStyled>
            ) : (
              <LinkButton to="/verify">¿Verificar cuenta?</LinkButton>
            )}
          </VerifyUserStyled>
        </ContentUserAndVerify>
        <ContainerOrdersStyled>
          <ProductsCheckout
            cartItems={cartItems}
            shippingCost={shippingCost}
            price={price}
          />
          {cartItems.length ? (
            <ContainerTotalCheckout>
              {/* <label>Ingrese los datos de la tarjeta a continuación</label>
              <CreditCard /> */}
              <TitleCheckOut>Ingrese los siguientes datos:</TitleCheckOut>
              <Field
                name="name"
                type="string"
                id="name"
                placeholder="Nombre Apellido"
                as={InputStyled}
              ></Field>
              <ErrorMessage name="name" component={ErrorStyled}></ErrorMessage>

              <Field
                name="cellphone"
                type="string"
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
              {isLoading ? (
                <Loading>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </Loading>
              ) : (
                <ButtonForm disabled={!cartItems.length}>
                  Finalizar compra
                </ButtonForm>
              )}
            </ContainerTotalCheckout>
          ) : null}
        </ContainerOrdersStyled>
        <ButtonDefect
          onClick={() => {
            dispatch(setCurrentUser(null));
            dispatch(limpiarCarrito());
            dispatch(clearOrders());
            navigate("/");
          }}
        >
          Cerrar sesión
        </ButtonDefect>
      </UserContainerStyled>
    </Formik>
  );
};

export default User;
