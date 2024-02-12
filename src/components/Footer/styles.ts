import styled from "styled-components";

export const ContainerFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    h4{
        font-size: 1.1rem;
        font-weight: 300;
        color: ${props => props.theme.colors.inverse};

        abbr{
            text-decoration: none;
        }
    }

    @media screen and (max-width: 425px){
        text-align: center;
        .containerFooter__text{
            font-size: 1rem;
            margin: 2rem 0 0 0;
        }
    }
`