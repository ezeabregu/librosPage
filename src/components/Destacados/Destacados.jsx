import React from "react";
import { DestacadosContainer, LinkButton } from "./destacadosStyles";
// import { destacadosRandom } from "../../utils/destacadosRandom";
import Product from "../ProductCards/Product";
import { ProductsContainer } from "../ProductCards/productCardsStyles";
import { useSelector } from "react-redux";

const Destacados = () => {
  // const nuevoArray = destacadosRandom(5);

  const destacados = useSelector((state) => state.destacados.destacados);

  return (
    <>
      <DestacadosContainer>
        <h2>Destacados</h2>
        <ProductsContainer>
          {destacados.map((Libro) => {
            return <Product {...Libro} key={Libro.id}></Product>;
          })}
        </ProductsContainer>
      </DestacadosContainer>
      <LinkButton to="/productos">VER MÁS</LinkButton>
    </>
  );
};

export default Destacados;
