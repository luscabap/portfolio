import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem;
    padding: 1rem;
    border: 2px solid ${props => props.theme.colors.secondary};
    box-shadow: 2px 4px 10px ${props => props.theme.colors.secondary};
    border-radius: 1rem;
    width: 20%;
    transition: 0.5s;

    &:hover{
        transform: scale(1.05);
        transition: 0.5s;
    }

    h1{
        font-size: 1.5rem;
        color: ${props => props.theme.colors.secondary}
    }
`