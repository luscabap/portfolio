import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerBackgroundModal = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerModalSuccessEmail = styled(motion.div)`
  background-color: #FEFEFE;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  width: 60%;
  height: 80%;
  border-radius: 1rem;

  .iconClose{
    position: absolute;
    right: 1rem;
    top: 1rem;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
  };

  .titleSucess{
    font-size: 1.7rem;
  };

  .subTitleSucess{
    font-size: 1.2rem;
  }

  .iconSuccess{
    width: 4rem;
    height: 4rem;
    color: ${p => p.theme.colors.primary}
  }
`;
