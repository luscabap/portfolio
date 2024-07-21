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

  .containerTitle{
    width: 227px;
  }

  .title {
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
  }

  .lista__desktop {
    list-style-type: none;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: space-between;
    width: 35rem;
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
  
  .container_menuMobile{
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

  @media screen and (min-width: 300px) and (max-width: 370px){
    .containerTitle{

      .title{
        font-size: 1.2rem;
      }
    }
  }

  @media screen and (max-width: 849px) {
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
    } 

    .container_menuMobile{
      display: block;
    }
  }

  @media screen and (max-width: 850px){
    position: fixed;
    z-index: 1000;
    width: 100%;
    top: 0;

    .title{
      font-size: 1.3rem;
    }

    .lista__item{
      font-size: 0.8rem;
    }
  }

  @media screen and (min-width: 851px) and (max-width: 1100px){

    .title{
      font-size: 1.2rem;
    }
  }
`;

export const ContainerIcon = styled.div`
  cursor: pointer;
  width: 227px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
