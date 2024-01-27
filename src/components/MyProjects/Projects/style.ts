import styled from "styled-components";

export const ProjectContainer = styled.div`
    display: grid;
    grid-template-areas: "infos img";
    grid-template-columns: 1fr 1fr;
    align-items: start;
    justify-content: center;
    gap: 1.4rem;
`

export const InfosContainer = styled.div`
    p{
        color: ${props => props.theme.colors.inverse};
        line-height: 1.7rem;
        margin: 1.5rem 0;
        text-align: justify;
    }
`

export const ImgContainer = styled.div`
    border-radius: 2rem;

    img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 2rem;
    }
`