import styled from "styled-components";

export const ContainerButton = styled.button`
  background-color: transparent;
  border: none;
  width: 100%;
  text-align: right;
  

  div {
    display: inline-block;
    border-radius: 4px;
    padding: 4px;
    transition: 0.5s;
    &:hover{
      background-color: ${props => props.theme.colors.hover};
    }
  }

  .iconButton{
    cursor: pointer;
    color: ${props => props.theme.colors.secondary};
  }
`