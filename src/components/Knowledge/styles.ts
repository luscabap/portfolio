import styled from "styled-components"

export const Container = styled.div`
    
    h2{
        font-style: bold;
        font-size: 3rem;
        text-decoration: underline;
        color: ${props => props.theme.colors.inverse};
        margin: 0 0 2rem 0;
    }
`;

export const teste = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 0 4rem;
`;