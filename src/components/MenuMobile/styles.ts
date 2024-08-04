import { motion } from "framer-motion";
import styled from "styled-components";

export const ContainerMenu = styled(motion.aside)`

  .lista__mobile {
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.secondary};
    position: fixed;
    top: 5rem;
    right: 0;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    box-shadow: 2px 2px 2px ${(props) => props.theme.colors.terciary};
    border-top: 0;
    border-radius: 0 0 1rem 1rem;
    opacity: 100%;
    transition: 0.5s all ease-in-out;
    width: 60%;
  }

  .lista__item {
    padding: 1.4rem;
    list-style-type: none;
    color: ${props => props.theme.colors.contrast};
    font-size: 1rem;
    text-decoration: underline;
  }
`;
