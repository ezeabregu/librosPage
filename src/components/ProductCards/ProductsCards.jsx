import React, { useState } from "react";
import {
  ProductCardsStyledContainer,
  ProductsContainer,
  FormStyled,
  InputFormStyled,
} from "./productCardsStyles";
import { Libros } from "../../data/libros";
import Product from "./Product";
import Button from "../Button/Button";

const ProductsCards = () => {
  const [value, setValue] = useState("");

  const listOfBooks = Libros.map((libro) => {
    return libro.title;
  });

  const handlerSubmitSearch = (e) => {
    e.preventDefault();

    const newSearch = value.trim().toLowerCase();

    const libroSearch = listOfBooks.find((libro) => {
      return libro.toLowerCase() === newSearch;
    });

    if (libroSearch) {
      console.log(libroSearch);
    } else {
      return alert("Libro no encontrado, prueba con otro!");
    }

    setValue("");
  };

  return (
    <>
      <ProductCardsStyledContainer>
        <h2>Libros</h2>
        <FormStyled>
          <InputFormStyled
            placeholder="Buscar un libro..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button onClick={(e) => handlerSubmitSearch(e)} disabled={!value}>
            Buscar
          </Button>
        </FormStyled>

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
