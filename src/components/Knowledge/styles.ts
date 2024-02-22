import styled from "styled-components"

export const Container = styled.div`
    
    @media screen and (max-width: 425px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .containerKnowledge__title{
            font-size: 2rem;
        }
    }

    
    h2{
        font-style: bold;
        font-size: 3rem;
        color: ${props => props.theme.colors.inverse};
        margin: 0 0 2rem 0;
    }
`;

export const ContainerItemKnowledge = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 0 4rem;

    @media screen and (max-width: 425px){
        width: 100%;
    }
`;