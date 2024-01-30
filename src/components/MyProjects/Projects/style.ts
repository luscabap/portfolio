import styled from "styled-components";

export const ProjectContainer = styled.div`
    display: grid;
    grid-template-areas: "infos img";
    grid-template-columns: 1fr 1fr;
    align-items: start;
    justify-content: center;
    gap: 1.4rem;
    margin: 3rem 0;
`

export const InfosContainer = styled.div`
    
    h3{
        font-size: 1.7rem;
        color: ${props => props.theme.colors.secondary}
    }

    p{
        color: ${props => props.theme.colors.inverse};
        line-height: 1.7rem;
        margin: 1.5rem 0;
        text-align: justify;
        text-indent: 2rem;
    }

    .techs_project{
        
    }
`

export const ImgContainer = styled.div`
    border-radius: 2rem;
    position: relative;

    .teste{
        position: fixed;
        background-color: green;
        z-index: 1000;
    }

    img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 2rem;
    }
`