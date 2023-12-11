import React from "react";
import {
  ProductCardsStyledContainer,
  ProductsContainer,
} from "./productCardsStyles";
import { Libros } from "../../data/libros";
import Product from "./Product";

const ProductsCards = () => {
  return (
    <>
      <ProductCardsStyledContainer>
        <h2>Libros</h2>
        <ProductsContainer>
          {Libros.map((libro) => {
            return <Product {...libro} key={libro.id}></Product>;
          })}
        </ProductsContainer>
      </ProductCardsStyledContainer>
    </>
  );
};

export default ProductsCards;
