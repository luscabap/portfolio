import styled from "styled-components"

export const Container = styled.div`

    display: flex;
    flex-direction: row;
    margin: 6rem auto;

    @media screen and (max-width: 425px){
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        .infos{

            .infos__aboutme{
                font-size: 2.5rem;
            }

            .infos__name{
                font-size: 1.5rem;
            }

            .infos__text{
                font-size: 1rem;
            }
        }

        .photo{
            margin: -3rem 0 -3rem 0;
        }

    }

    .infos{

        h2{
        font-style: bold;
        font-size: 3rem;
        text-decoration: underline;
        color: ${props => props.theme.colors.inverse};
        margin: 0 0 1.7rem 0;
        }

        h3 {
            color: ${props => props.theme.colors.secondary};
            font-size: 1.7rem;
            margin: 0.7rem 0 2.5rem 0rem;
        }

        p{
            font-size: 1.2rem;
            line-height: 2rem;
            margin-bottom: 2rem;
            text-indent: 1.5em;
            text-align: justify;
            color: ${props => props.theme.colors.inverse};
        }
    }
    
    .photo{
        
        img{
            width: 30rem;
            transform: scale(0.75);
            border: 3px solid ${props => props.theme.colors.terciary};
            border-radius: 2rem;
        }
    }
    
`