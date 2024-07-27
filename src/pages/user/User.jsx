import React from "react";
import {
  UserContainerStyled,
  NameUserStyled,
  ContentUserAndVerify,
  VerifyUserStyled,
  ContainerOrdersStyled,
  AccountVerifiedStyled,
  ContainerTotalCheckout,
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

  return (
    <Formik
      initialValues={buyValues}
      validationSchema={validationBuy}
      onSubmit={async (values) => {
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
          <ProductsCheckout
            cartItems={cartItems}
            shippingCost={shippingCost}
            price={price}
          />
          {cartItems.length ? (
            <ContainerTotalCheckout>
              {/* <label>Ingrese los datos de la tarjeta a continuación</label>
              <CreditCard /> */}
              <label>Ingrese los siguientes datos:</label>
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
              {currentUser.verified === true ? (
                <ButtonForm>Finalizar compra</ButtonForm>
              ) : (
                <label>Debes verificar la cuenta para comprar!</label>
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
