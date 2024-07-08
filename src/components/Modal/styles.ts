import styled from "styled-components";

type ContainerProps = {
  isopen: boolean
}

export const BackgroundContainer = styled.div<ContainerProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: ${props => props.isopen ? "flex" : "none"};
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Container = styled.ul`
  background-color: ${props => props.theme.colors.terciary};
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
  padding: 24px;
  border-radius: 15px;
  z-index: 1000;

  @media screen and (min-width: 320px) and (max-width: 1024px){
    width: 85%;
  }

  .containerBotao{
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .botao{
      cursor: pointer;
    }
  }

  .tituloTech{
    color: ${props => props.theme.colors.primary};
    text-decoration: underline;
  }

  .containerItems{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 50%;
  }
`