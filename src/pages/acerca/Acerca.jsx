import React, { useEffect } from "react";
import { AcercaStyledContainer, AcercaText } from "./acercaStyles";

const Acerca = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <AcercaStyledContainer>
        <AcercaText>
          <h2>QUIENES SOMOS</h2>
          <p>
            Somos la única editorial argentina pionera en la edición y
            comercialización de libros que está activa, vigente y en constante
            crecimiento desde hace 110 años. Fundada por Pedro García, hombre de
            negocios español, registramos el ISBN número 2 y hemos sido siempre
            parte muy importante de la formación de varias generaciones, tanto
            de Argentina como también de todos los países de habla hispana.
            Dentro de nuestro catálogo contamos con autores de renombre nacional
            e internacional. Algunos de ellos son: Jorge Luis Borges, Victoria
            Ocampo, Rodolfo Fogwill, Roberto Arlt, Silvina Ocampo, Juan José
            Saer, Leopoldo Lugones, Julio Cortázar, José Mauro Vasconcelos y
            Antoine de Saint-Exupéry, entre otros. Por todo esto, somos la
            editorial argentina más prestigiosa desde 1912.
          </p>
        </AcercaText>
        <img
          src="https://fotografias.lasexta.com/clipping/cmsimages02/2018/09/12/D2682B65-7C4C-4DE5-B712-8F65E0CB24B7/98.jpg?crop=1000,563,x0,y51&width=1900&height=1069&optimize=high&format=webply"
          alt="libreriaImagen"
        />
      </AcercaStyledContainer>
    </>
  );
};

export default Acerca;
