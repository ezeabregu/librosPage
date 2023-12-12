import React from "react";
import { ProductosContainerStyled } from "./productosStyles";
import ProductsCards from "../../components/ProductCards/ProductsCards";

const Productos = () => {
  return (
    <>
      <ProductosContainerStyled>
        <ProductsCards />
      </ProductosContainerStyled>
    </>
  );
};

export default Productos;
