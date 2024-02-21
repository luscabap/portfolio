import styled from "styled-components";

export const ContainerProject = styled.div`

    h2{
        font-style: bold;
        font-size: 3rem;
        text-decoration: underline;
        color: ${props => props.theme.colors.inverse};
        margin: 6rem 0 0 0;
    }

    @media screen and (max-width: 425px){

        .containerProject__title{
            font-size: 2rem;
        }
    }

    
`