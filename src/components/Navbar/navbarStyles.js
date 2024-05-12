import styled from "styled-components";
import { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../Button/Button";

export const NavbarStyled = styled.header`
  width: 100%;
  height: 80px;
  margin: 0 auto;
  padding: 20px;
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ed1b2e;
  h3 {
    color: #d7d7d8;
    cursor: pointer;
  }
`;

export const LinkContainer = styled.ul`
  display: flex;
  gap: 20px;
  color: var(--gray);
  @media (max-width: 800px) {
    display: none;
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  @media (max-width: 800px) {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  cursor: pointer;
  &.active {
    font-weight: 700;
  }
`;

export const CartLinkStyled = styled(NavLink)`
  cursor: pointer;
  span {
    position: absolute;
    top: 20px;
    height: 20px;
    width: 20px;
    text-align: center;

    border-radius: 1rem;
    border: 1px solid white;
    color: white;
    background-color: red;
    font-size: 0.8rem;
  }
`;

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 400px);
  height: 100vh;
  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;
