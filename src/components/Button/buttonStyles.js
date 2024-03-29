import { motion } from "framer-motion";
import styled from "styled-components";

export const ButtonStyled = styled(motion.button)`
  margin-top: 10px;
  background-color: var(--rojo);
  color: var(--textGray);
  font-weight: 700;
  border: none;
  border-radius: 5px;
  padding: 10px 25px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
