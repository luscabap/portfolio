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
`