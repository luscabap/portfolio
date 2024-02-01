import styled from 'styled-components';

export const Container = styled.div`
    height: 5rem;
    background-color: ${props => props.theme.colors.terciary};
    display: flex;
    justify-content: space-evenly;
    align-items: center;

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
`

export const ContainerIcon = styled.div`
    cursor: pointer;
`