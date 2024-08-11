import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerModalContact = styled(motion.div)`
  background-color: ${p => p.theme.colors.primary};
  position: fixed;
  right: 1rem;
  bottom: 5rem;
  width: 20%;
  transform-origin: bottom right;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 50;
  border-radius: 1rem;
`