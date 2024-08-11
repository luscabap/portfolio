import styled from "styled-components";

export const ContainerMain = styled.main`
    margin: 9rem 20rem;

    .buttonModalContact{
        background-color: ${p => p.theme.colors.primary};
        border-radius: 50%;
        position: fixed;
        right: 1rem;
        bottom: 1rem;
    }

    @media screen and (max-width: 650px){
        margin: 6rem 1rem;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
    }

    @media screen and (max-width: 768px){
        margin: 6rem 1rem;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
    }

    @media screen and (max-width: 1024px){
        margin: 6rem 1rem;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
    }

    @media screen and (max-width: 1440px){
        margin: 6rem 1rem;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
    }

`

export const ButtonModalContact = styled.button`
    background-color: ${p => p.theme.colors.primary};
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    border: none;
    border-radius: 999px;
    padding: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;

    &:hover{
        background-color: ${p => p.theme.colors.contrast};
    }

    .iconContact{
        width: 1.5rem;
        height: 1.5rem;
    }
`