import React from "react";
import {
  ContactoStyledContainer,
  ContactoFormulario,
  ContactoDatosContenedor,
} from "./contactoStyles";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Formulario from "../../components/Formulario/Formulario";
import { FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Contacto = () => {
  return (
    <>
      <Navbar />
      <ContactoStyledContainer>
        <ContactoFormulario>
          <h2>Contacto</h2>
          <Formulario />
        </ContactoFormulario>
        <ContactoDatosContenedor>
          <h2>¡Hola! ¿Consultas? No dudes en preguntarnos.</h2>
          <ul>
            <li>
              <FaWhatsapp fill="var(--moreGray)" />
              +5493516000000
            </li>
            <li>
              <CiMail fill="var(--moreGray)" />
              consultas@page.com.ar
            </li>
            <li>
              <FiMapPin fill="var(--moreGray)" />
              Av. Velez Sarfield 600, Córdoba
            </li>
          </ul>
        </ContactoDatosContenedor>
      </ContactoStyledContainer>
      <Footer />
    </>
  );
};

export default Contacto;
