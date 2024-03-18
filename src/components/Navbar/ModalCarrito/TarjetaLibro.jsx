import React from "react";
import {
  ContenedorProductosCartStyled,
  ContenedorTituloStyled,
  TituloStyled,
  PrecioStyled,
  ContenedorCantidadStyled,
} from "./modalCarritoStyles";
import { useDispatch } from "react-redux";
import { formatoPrecio } from "../../../utils/formatoPrecio";
import Contador from "../../UI/Contador/Contador.jsx";
import Incrementar from "../../UI/Incrementar/Incrementar";
import { borrar, agregar } from "../../../redux/carrito/carritoSlice";
import { FaMinus } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import { BsPlusLg } from "react-icons/bs";

const TarjetaLibro = ({ img, title, id, price, cantidad }) => {
  const dispatch = useDispatch();

  return (
    <ContenedorProductosCartStyled>
      <img src={img} alt={title} />
      <ContenedorTituloStyled>
        <TituloStyled>{title}</TituloStyled>
        <PrecioStyled>{formatoPrecio(price)}</PrecioStyled>
      </ContenedorTituloStyled>
      <ContenedorCantidadStyled>
        <Incrementar
          bgColor="var(--btn-gradient-secondary)"
          onClick={() => dispatch(borrar(id))}
        >
          {cantidad === 1 ? <IoMdTrash /> : <FaMinus />}
        </Incrementar>
        <Contador>{cantidad}</Contador>
        <Incrementar
          onClick={() => dispatch(agregar({ img, title, price, id }))}
        >
          <BsPlusLg />
        </Incrementar>
      </ContenedorCantidadStyled>
    </ContenedorProductosCartStyled>
  );
};

export default TarjetaLibro;
