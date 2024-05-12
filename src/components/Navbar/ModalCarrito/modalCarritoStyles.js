import { motion } from "framer-motion";
import styled from "styled-components";

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
    border-radius: 0 0 0 0;
  }
`;

export const HeaderModalCarrito = styled.div`
  width: 100%;
  height: 125px;
  background-color: var(--rojo);
  border-radius: 1rem 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    border-radius: 0 0 0 0;
  }
`;

export const TituloModal = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const ContenedorBotonCerrarModal = styled(motion.button)`
  border: none;
  background-color: var(--rojo);
  cursor: pointer;
`;

export const CarritoVacio = styled.div`
  position: absolute;
  top: 30%;
  right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: var(--rojo);
  border: 0.5px solid var(--rojo);
  width: 80%;
`;

export const BotonTrash = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ContainerCarrito = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  h4 {
    color: var(--moreGray);
  }
`;

export const ContainerTotal = styled.div`
  height: 150px;
  padding: 1rem;
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
  height: 50px;
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
  gap: 10px;
  width: 100%;
  height: 100%;
  padding: 1rem;
  overflow: scroll;
  &::-webkit-scrollbar {
    background: transparent;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-height: 800px) {
    height: 350px;
  }
`;

export const ContenedorProductosCartStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  background-color: #9f9fa3;
  border-radius: 7px;
  gap: 15px;
  padding: 1rem;
  box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.3);
  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }
`;

export const ContenedorTituloStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100px;
`;

export const TituloStyled = styled.p`
  margin: 0;
  color: #000;
  font-size: 0.8rem;
  font-weight: 600;
`;

export const PrecioStyled = styled.span`
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
`;

export const ContenedorCantidadStyled = styled.div`
  display: flex;
  align-items: center;
`;
