import styled from "styled-components";

export const ContainerContact = styled.div`


    h2{
        font-style: bold;
        font-size: 3rem;
        text-decoration: underline;
        color: ${props => props.theme.colors.inverse}
    }
`

export const ContainerContactIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10rem;
    margin: 5rem 0 0 0;

    .containerContact_Icon{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        transition: 1s;
        text-decoration: none;
        cursor: pointer;

        h4 {
            color: ${props => props.theme.colors.terciary};
            font-weight: bolder;
        }

        p{
            color: ${props => props.theme.colors.inverse}
        }
    }

    .containerContact_Icon:hover{
        transform: scale(1.1);
        transition: 0.5s;
        text-decoration: underline;
    }
`