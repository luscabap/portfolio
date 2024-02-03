import styled from "styled-components";

export const ProjectContainer = styled.div`
    display: grid;
    grid-template-areas: "infos img";
    grid-template-columns: 1fr 1fr;
    align-items: start;
    justify-content: center;
    gap: 1.4rem;
    margin: 3rem 0 6rem 0;
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

    h4{
        color: ${props => props.theme.colors.primary};
        font-size: 1.1rem;
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

    .anchors{
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        & > a{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.6rem;
            margin: 0.8rem 0 0 0;
            text-decoration: none;
            
            h5{
                color: ${props => props.theme.colors.inverse};
                text-decoration: underline;
                font-weight: normal;
                font-size: 1rem;
            }

            .anchor__icon{
                color: ${props => props.theme.colors.primary};

                &:hover{
                    cursor: pointer;
                }
            }
        }
    }

`

export const TechsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.7rem;
    margin: 1rem 0 0 0;
`