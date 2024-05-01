import React, { useEffect } from "react";
import { ProductosContainerStyled } from "./productosStyles";
import ProductsCards from "../../components/ProductCards/ProductsCards";

const Productos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <ProductosContainerStyled>
        <ProductsCards />
      </ProductosContainerStyled>
    </>
  );
};

export default Productos;
