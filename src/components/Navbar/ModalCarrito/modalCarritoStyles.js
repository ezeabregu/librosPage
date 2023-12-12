import { motion } from "framer-motion";
import { styled } from "styled-components";

export const ContainerStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 100vh;
  background-color: var(--gray);
  border-radius: 1rem 0 0 1rem;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const HeaderModalCarrito = styled.div`
  width: 100%;
  height: 80px;
  background-color: var(--moreGray);
  border-radius: 1rem 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TituloModal = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

export const ContenedorBotonCerrarModal = styled(motion.button)`
  border: none;
  background-color: var(--moreGray);
  cursor: pointer;
`;

export const CarritoVacio = styled.div`
  position: absolute;
  top: 100px;
  right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: var(--rojo);
  border: 0.5px solid var(--rojo);
  width: 80%;
`;

export const ContainerCarrito = styled.div`
  height: 55%;
  h4 {
    color: var(--moreGray);
  }
`;

export const ContainerTotal = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h5,
  h3 {
    color: var(--moreGray);
  }
`;

export const ContainerSubtotalStyled = styled.div`
  width: 100%;
  padding: 1rem 1rem;
  text-align: left;
  h3 {
    color: var(--moreGray);
  }
`;

export const ContainerTitulo = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  .vaciarCarr {
    cursor: pointer;
    fill: var(--moreGray);
  }
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 90%;
  margin: 0 auto;
  padding: 1rem;
  padding-left: 0;
  overflow: scroll;
  &::-webkit-scrollbar {
    background: transparent;
  }
  &::-webkit-scrollbar:horizontal {
    display: none;
  }
  @media (max-height: 800px) {
    height: 235px;
  }
`;
