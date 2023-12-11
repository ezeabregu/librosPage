import { css, styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

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
`;

export const NavLinkStyled = styled(NavLink)`
  cursor: pointer;
  &.active {
    font-weight: 700;
  }
`;

export const CartLinkStyled = styled(NavLink)`
  cursor: pointer;
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
