import React, { useEffect } from "react";
import { ProductosContainerStyled } from "./productosStyles";
import ProductsCards from "../../components/ProductCards/ProductsCards";
import ScrollButton from "../../components/ScrollButton/ScrollButton";

const Productos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <ProductosContainerStyled>
        <ProductsCards />
        <ScrollButton />
      </ProductosContainerStyled>
    </>
  );
};

export default Productos;
