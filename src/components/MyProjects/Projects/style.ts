import styled from "styled-components";

type ImgContainerProps = {
    concluido: boolean
}

export const ProjectContainer = styled.div`
    display: grid;
    grid-template-areas: "infos img";
    grid-template-columns: 1fr 1fr;
    align-items: start;
    justify-content: center;
    gap: 1.4rem;
    margin: 3rem 0 6rem 0;

    @media screen and (max-width: 425px){
        display: flex;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 768px){
        display: flex;
        flex-wrap: wrap;
    }

`

export const InfosContainer = styled.div`
    
    h3{
        font-size: 1.7rem;
        color: ${props => props.theme.colors.secondary};
        text-decoration: underline;
    }

    p{
        color: ${props => props.theme.colors.inverse};
        line-height: 1.7rem;
        margin: 1.5rem 0;
        text-align: justify;
        text-indent: 2rem;
    }

    h4{
        color: ${props => props.theme.colors.primary};
        font-size: 1.1rem;
    }
`

export const ImgContainer = styled.div<ImgContainerProps>`
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
        opacity: ${props => props.concluido ? 1 : 0.5};
    }

    .anchors{
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        & > a {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.6rem;
            margin: 0.8rem 0 0 0;
            text-decoration: none;
            padding: 0.5rem;
            border-radius: 1rem;
            transition: 0.3s;
            cursor: ${props => props.concluido ? 'pointer' : 'not-allowed'};
            min-width: 130px;

            &:hover{
                box-shadow: 2px 2px 8px 1px ${props => props.concluido ? props.theme.colors.primary : "red"};
                padding: 0.5rem;
                border-radius: 1rem;
                transition: 0.3s;
            }

            &:first-child{
                pointer-events: ${props => props.concluido ? 'all' : 'none'};
            }
            
            h5{
                color: ${props => props.theme.colors.inverse};
                text-decoration: underline;
                font-weight: normal;
                font-size: 1rem;
            }

            .anchor__icon{
                color: ${props => props.theme.colors.primary};
            }
        }
    }

    @media screen and (max-width: 768px){
        margin: 0 1rem;
    }

`

export const TechsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.7rem;
    margin: 1rem 0 0 0;
    flex-wrap: wrap;
    max-width: 100%;
`