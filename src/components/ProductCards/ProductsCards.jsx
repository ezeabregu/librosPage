import React, { useState, useRef } from "react";
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
      const obtenerLibro = Libros.find((libro) => {
        return libro.title === libroSearch;
      });
      doScroll();
    } else {
      return alert("Libro no encontrado, prueba con otro!");
    }

    setValue("");
  };

  const librosRef = useRef();

  const doScroll = () => {
    window.scrollTo(
      librosRef.current.getBoundingClientRect().x,
      librosRef.current.getBoundingClientRect().y
    );
  };

  return (
    <>
      <ProductCardsStyledContainer doScroll={doScroll}>
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

        <ProductsContainer ref={librosRef}>
          {Libros.map((libro) => {
            return <Product {...libro} key={libro.id}></Product>;
          })}
        </ProductsContainer>
      </ProductCardsStyledContainer>
    </>
  );
};

export default ProductsCards;
