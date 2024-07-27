import React from "react";
import {
  ContainerMyOrders,
  TituloMyOrders,
  ContainerOrders,
} from "./myOrdersStyles";
import { useNavigate } from "react-router-dom";
import ButtonDefect from "../../components/ButtonDefect/ButtonDefect";

const MyOrders = () => {
  const navigate = useNavigate();

  return (
    <ContainerMyOrders>
      <TituloMyOrders>Mis órdenes</TituloMyOrders>
      <ContainerOrders>Aquí apareceran tus órdenes</ContainerOrders>
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
