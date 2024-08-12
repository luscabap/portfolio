import styled from "styled-components";

export const ContainerProject = styled.div`
    .containerProject__title{
        font-style: bold;
        font-size: 2.3rem;
        color: ${props => props.theme.colors.inverse};
        margin: 6rem 0 0 0;
    }
    
    .container__button{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .containerProject__button{
        display: inline-flex;
        margin: auto;
        justify-content: center;
        align-items: center;
        color: ${props => props.theme.colors.primary};
        text-decoration: underline;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        gap: 0.3rem;
        &:hover{
            background-color: ${props => props.theme.colors.terciary};
            color: white
        }

        .textButton{
            font-weight: 400;
        }
    }

    @media screen and (max-width: 425px){

        .containerProject__title{
            font-size: 2rem;
        }
    }

    
`