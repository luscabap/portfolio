import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10rem 0;


    h1 {
        font-size: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        strong{
            color: ${props => props.theme.colors.inverse};
            padding: 0.3rem;
            border-radius: 0.4rem;
        }
    }

    h2{
        font-size: 2rem;
    }
`

export const ContainerBotoes = styled.div`
    

    button{
        border: none;
        border-radius: 1rem;
        padding: 1rem;
        width: 12rem;
        height: 4rem;
        font-size: 1.2rem;
        font-weight: bold;
        margin: 2rem 1rem;
        transition: 0.8s;
        cursor: pointer;
    };

    button:hover{
        transform: scale(1.1);
        transition: 0.4s;
        transition-timing-function: ease-out;
        cursor: pointer;
    }

    .btn_cv{
        background-color: ${props => props.theme.colors.terciary};
        color: ${props => props.theme.colors.primary};
    }

    .btn_github{
        background-color: transparent;
        border: 2px solid ${props => props.theme.colors.terciary};
        color: ${props => props.theme.colors.primary};
    }
`