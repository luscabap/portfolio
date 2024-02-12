import styled from 'styled-components';


export const Container = styled.header`

@media screen and (max-width: 425px){
        position: fixed;
        z-index: 1000;
        width: 100%;

        .lista__item{
            display: none;
        }

        .menuburguer{
            display: block;
        }   

        h1{
            
        }
        
    }

     display: flex;
     align-items: center;
     justify-content: center;

    .display_default{
        height: 5rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: ${props => props.theme.colors.terciary};
        width: 100%;
    }

    .display_fixed{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        position: fixed;
        top: 0.7rem; 
        width: 60%;
        z-index: 100;
        background-color: ${props => props.theme.colors.terciary};
        padding: 1rem;
        border-radius: 1rem;


    }

    h1{
        color: ${props => props.theme.colors.primary};
    }

    .lista{
        list-style-type: none;
        display: flex;
        gap: 2rem;

        &__item{
            cursor: pointer;
            transition: 0.5s;
            color: ${props => props.theme.colors.inverse};
        }

        &__item:hover{
            color: ${props => props.theme.colors.contrast};
            transition: 0.5s;
        }
    }

    a{
        text-decoration: none;
    }

    .menuburguer{
        display: none;
    }
`

export const ContainerIcon = styled.div`
    cursor: pointer;
`