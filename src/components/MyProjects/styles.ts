import styled from "styled-components";

export const ContainerProject = styled.div`

    .containerProject__title{
        font-style: bold;
        font-size: 2.3rem;
        color: ${props => props.theme.colors.inverse};
        margin: 6rem 0 0 0;
    }

    @media screen and (max-width: 425px){

        .containerProject__title{
            font-size: 2rem;
        }
    }

    
`