import React, { useEffect } from "react";
import { ContainerMyOrders, TituloMyOrders } from "./myOrdersStyles";
import { useNavigate } from "react-router-dom";
import ButtonDefect from "../../components/ButtonDefect/ButtonDefect";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../axios/axiosOrder";
import { clearError, fetchOrdersFail } from "../../redux/orders/ordersSlice";
import CardsOrders from "../../components/ordenes/CardsOrders";

const MyOrders = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const { orders, error } = useSelector((state) => state.orders);

  useEffect(() => {
    if (!orders) {
      getOrders(dispatch, currentUser);
    }
    if (!currentUser.token) {
      dispatch(fetchOrdersFail());
    } else {
      error && dispatch(clearError());
    }
  }, [dispatch, currentUser?.token, orders, error]);

  return (
    <ContainerMyOrders>
      <TituloMyOrders>Mis órdenes</TituloMyOrders>

      <CardsOrders />

      <ButtonDefect
        onClick={() => {
          navigate("/login");
        }}
      >
        Atrás
      </ButtonDefect>
    </ContainerMyOrders>
  );
};

export default MyOrders;
