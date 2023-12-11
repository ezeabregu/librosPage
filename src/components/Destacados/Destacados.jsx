import React from "react";
import { DestacadosContainer, LinkButton } from "./destacadosStyles";
import { destacadosRandom } from "../../utils/destacadosRandom";
import Product from "../ProductCards/Product";
import { ProductsContainer } from "../ProductCards/productCardsStyles";

const Destacados = () => {
  const nuevoArray = destacadosRandom(5);

  return (
    <>
      <DestacadosContainer>
        <h2>Destacados</h2>
        <ProductsContainer>
          {nuevoArray.map((Libro) => {
            return <Product {...Libro} key={Libro.id}></Product>;
          })}
        </ProductsContainer>
      </DestacadosContainer>
      <LinkButton to="/productos">VER MÁS</LinkButton>
    </>
  );
};

export default Destacados;
