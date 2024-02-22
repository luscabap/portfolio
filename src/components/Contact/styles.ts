import styled from "styled-components";

export const ContainerContact = styled.div`
    margin: 6rem 0 0 0;

    h2{
        font-style: bold;
        font-size: 3rem;
        color: ${props => props.theme.colors.inverse};
        margin: 0 0 1.7rem 0;
    }

    @media screen and (max-width: 425px){
        .containerContact__title{
            font-size: 2rem;
        }

    }
`

export const ContainerContactIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-evenly;
    margin: 5rem 0 0 0;

    @media screen and (max-width: 425px){
        flex-wrap: wrap;

        .containerContact_Icon{
            width: 100%;
            margin: 0 0 2rem 0;
        }
    }

    .containerContact_Icon{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        transition: 1s;
        text-decoration: none;
        gap: 0.7rem;
        cursor: pointer;

        h4 {
            color: ${props => props.theme.colors.secondary};
            font-weight: bolder;
            font-size: 1.25rem;
        }

        p{
            color: ${props => props.theme.colors.inverse}
        }
    }

    .containerContact_Icon:hover{
        transform: scale(1.1);
        transition: 0.5s;
        text-decoration: none
    }
`