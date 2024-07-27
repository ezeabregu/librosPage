import React from "react";
import {
  ContainerOrder,
  ContainerData,
  ContainerIcon,
  Pending,
  Check,
  ContainerNoOrder,
} from "./cardsOrdersStyles";
import { useSelector } from "react-redux";
import { Loading } from "../../pages/user/userStyles";
import { formatoPrecio } from "../../utils/formatoPrecio";
import { formatoFecha } from "../../utils/formatoFecha";

const CardsOrders = () => {
  const { orders, loading, error } = useSelector();

  if (loading && !orders) {
    return <Loading />;
  }

  if (error) {
    return <h2 style={{ textAlign: "center" }}>{error}</h2>;
  }

  return (
    <>
      {orders?.length ? (
        orders.map((order) => {
          return (
            <ContainerOrder>
              <ContainerData>
                <span>ID: #{order._id.slice(0, 12)}</span>
                <span>Fecha: {formatoFecha(order.createdAt)}</span>
                <span>Total: {formatoPrecio(order.price)} </span>
              </ContainerData>
              <ContainerIcon>
                {order.status === "pending" && <Pending />}
                {order.status === "check" && <Check />}
              </ContainerIcon>
            </ContainerOrder>
          );
        })
      ) : (
        <ContainerNoOrder>
          <h2>Aquí aparectan tus órdenes</h2>
        </ContainerNoOrder>
      )}
    </>
  );
};

export default CardsOrders;
