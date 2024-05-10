import React, { useState, useRef } from "react";
import {
  ProductCardsStyledContainer,
  ProductsContainer,
  FormStyled,
  InputFormStyled,
} from "./productCardsStyles";
import { Libros } from "../../data/libros";
import Product from "./Product";

const ProductsCards = () => {
  let LibrosCopy = {};

  // const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  // const listOfBooks = Libros.map((libro) => {
  //   return libro.title;
  // });

  const librosRef = useRef();

  const doScroll = () => {
    window.scrollTo(
      librosRef.current.getBoundingClientRect().x,
      librosRef.current.getBoundingClientRect().y
    );
  };

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  if (!search) {
    LibrosCopy = Libros;
  } else {
    LibrosCopy = Libros.filter((dato) => {
      return dato.title.toLowerCase().includes(search.toLowerCase());
    });

    // doScroll();
  }

  // const handlerSubmitSearch = (e) => {
  //   e.preventDefault();

  //   const newSearch = value.trim();

  //   const libroSearch = listOfBooks.find((libro) => {
  //     return libro.toLowerCase() === newSearch;
  //   });

  //   if (libroSearch) {
  //     LibrosCopy = Libros.filter((libro) => {
  //       return libro.title.toLowerCase().includes(libroSearch.toLowerCase());
  //     });

  //     doScroll();
  //     // const obtenerLibro = LibrosCopy.find((libro) => {
  //     //   return libro.title === libroSearch;
  //     // });
  //   } else {
  //     return alert("Libro no encontrado, prueba con otro!");
  //   }
  //   setValue("");
  // };

  return (
    <>
      <ProductCardsStyledContainer doScroll={doScroll}>
        <h2>LIBROS</h2>
        <FormStyled>
          <InputFormStyled
            placeholder="Buscar un libro..."
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
            onChange={searcher}
            value={search}
          />
          {/* <Button onClick={(e) => handlerSubmitSearch(e)} disabled={!value}>
            Buscar
          </Button> */}
        </FormStyled>
        <ProductsContainer ref={librosRef}>
          {!LibrosCopy.length ? (
            <span>Libro no encontrado...</span>
          ) : (
            LibrosCopy.map((libro) => {
              return <Product {...libro} key={libro.id}></Product>;
            })
          )}
        </ProductsContainer>
      </ProductCardsStyledContainer>
    </>
  );
};

export default ProductsCards;
