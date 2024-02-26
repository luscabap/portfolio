import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: 0.5s all ease-in-out;

  .menuburguer {
    display: none;
  }

  .container__display_default {
    height: 5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${(props) => props.theme.colors.terciary};
    width: 100%;
  }
  
  a {
    text-decoration: none;
  }

  h1 {
    color: ${(props) => props.theme.colors.primary};
  }

  .lista__desktop {
    list-style-type: none;
    display: flex;
    gap: 2rem;
  }

  .lista__item {
    cursor: pointer;
    transition: 0.5s;
    color: ${(props) => props.theme.colors.inverse};
  }
  .lista__item:hover {
    color: ${(props) => props.theme.colors.contrast};
    transition: 0.5s;
  }

  .lista__mobile {
    display: none;
  }

  /* .display_fixed{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        position: fixed;
        top: 0.7rem; 
        width: 60%;
        z-index: 100;
        background-color: ${(props) => props.theme.colors.terciary};
        padding: 1rem;
        border-radius: 1rem;
    } */

    @media screen and (max-width: 650px) {
    position: fixed;
    z-index: 1000;
    width: 100%;
    top: 0;
    transition: 0.5s all ease-in-out;
    

    .container__display_default{

        .lista__desktop {
            display: none;
            opacity: 0%;
        }

        .lista__mobile {
            display: flex;
            flex-direction: column;
            background-color: ${(props) => props.theme.colors.terciary};
            position: fixed;
            top: 5rem;
            right: 0;
            border: 1px solid ${(props) => props.theme.colors.secondary};
            box-shadow: 2px 2px 2px ${(props) => props.theme.colors.terciary};
            border-top: 0;
            border-radius: 0 0 1rem 1rem;
            opacity: 100%;
            transition: 0.5s all ease-in-out;
        }

        .lista__item {
            padding: 1rem;
            list-style-type: none;
        }

        .menuburguer {
            display: block;
        }
    } 
  }

  @media screen and (max-width: 850px){
    position: fixed;
    z-index: 1000;
    width: 100%;
    top: 0;

    .title{
      font-size: 1.5rem;
    }

    .lista__item{
      font-size: 0.8rem;
    }
  }
`;

export const ContainerIcon = styled.div`
  cursor: pointer;
`;
