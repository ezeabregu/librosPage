import React from "react";
import {
  ProductCardsStyledContainer,
  ProductsContainer,
} from "./productCardsStyles";
import { Libros } from "../../data/libros";
import Product from "./Product";
import Button from "../Button/Button";

const ProductsCards = () => {
  return (
    <>
      <ProductCardsStyledContainer>
        <h2>Libros</h2>
        <form action="">
          <input placeholder="Buscar un libro..."></input>
          <Button>Buscar</Button>
        </form>

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
