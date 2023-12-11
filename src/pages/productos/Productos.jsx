import React from "react";
import { ProductosContainerStyled } from "./productosStyles";
import Navbar from "../../components/Navbar/Navbar";
import ProductsCards from "../../components/ProductCards/ProductsCards";
import Footer from "../../components/Footer/Footer";

const Productos = () => {
  return (
    <>
      <ProductosContainerStyled>
        <Navbar />
        <ProductsCards />
      </ProductosContainerStyled>
      <Footer />
    </>
  );
};

export default Productos;
