import React from "react";
import { Error404StyledContainer, Error404Text } from "./Error404Styles";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Error404 = () => {
  return (
    <>
      <Error404StyledContainer>
        <Navbar />
        <Error404Text>Error 404 - Page not found!</Error404Text>
      </Error404StyledContainer>
      <Footer />
    </>
  );
};

export default Error404;
