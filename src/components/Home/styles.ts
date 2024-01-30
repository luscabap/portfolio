import styled from "styled-components";
import { desaturate } from 'polished'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    h1 {
        font-size: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        color: ${props => props.theme.colors.inverse};

        .icone_dev{
            color: ${props => props.theme.colors.inverse};
        }

        strong{
            color: ${props => props.theme.colors.primary};
        }
    }

    h2{
        font-size: 2rem;
        color: ${props => props.theme.colors.secondary};
        margin: 0 0 1.7rem 0;
    }
`

export const ContainerBotoes = styled.div`
    display: flex;
    
    button{
        border: none;
        border-radius: 1rem;
        padding: 1rem;
        width: 14rem;
        height: 4rem;
        font-size: 1.2rem;
        font-weight: bold;
        margin: 1rem 1rem;
        transition: 0.8s;
        cursor: pointer;
    };

    button:hover{
        transform: scale(1.1);
        transition: 0.4s;
        transition-timing-function: ease-out;
        cursor: pointer;
    }


    .container__cv{
        text-decoration: none;

        &__btn{
            background-color: ${props => props.theme.colors.terciary};
            color: ${props => props.theme.colors.primary};
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }
        &__btn:hover{
            background-color: ${desaturate(0.04, '#1D303B')};
            color:${desaturate(0.1,'#B3E7FD')};
        }
    }


    .container__github{
        text-decoration: none;

        &__btn{
        background-color: transparent;
        border: 2px solid ${props => props.theme.colors.terciary};
        color: ${props => props.theme.colors.primary};
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.6rem;
    }
    }
    
`