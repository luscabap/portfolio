import styled from "styled-components";
import { desaturate } from 'polished'

export const Container = styled.div`


    @media screen and (max-width: 425px){
        flex-wrap: wrap;
        gap: 0;
        text-align: center;

        .home__title{
            flex-wrap: wrap;
            font-size: 2rem;

            strong{
                margin: 0 0 1rem 0;
                font-size: 2rem;
            }
        }

        .home__subtitle{
            font-size: 1.5rem;
        }
    };

    @media screen and (max-width: 768px){
        .home__title{
            flex-wrap: wrap;
            font-size: 2.5rem;

            strong{
                margin: 0 0 1rem 0;
                font-size: 3rem;
            }
        }

        .home__subtitle{
            font-size: 1.8rem;
        }
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .home__title {
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

    .home__subtitle{
        font-size: 2rem;
        color: ${props => props.theme.colors.secondary};
        margin: 0 0 1.7rem 0;
    }

    .home__resume{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: ${props => props.theme.colors.inverse};
        gap: 1.6rem;

        &__subtitle{
            font-size: 1.5rem;

            &__destaque{
                color: ${props => props.theme.colors.primary}
            }
        }

        &__text{
            text-align: center;
            font-size: 1.1rem;

            &__destaque{
                color: ${props => props.theme.colors.secondary}
            }
        }
    }
`

export const ContainerBotoes = styled.div`
    @media screen and (max-width: 425px){
        display: flex;
        flex-direction: column;
    }

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
            /* background-color: ${desaturate(0.04, '#1D303B')};
            color:${desaturate(0.1,'#B3E7FD')}; */
            background-color: ${props => props.theme.colors.hover};
            color: ${props => props.theme.colors.primary}
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