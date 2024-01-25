import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 60%;
    margin: 6rem auto;

    .infos{


        h1 {
        font-style: bold;
        font-size: 3rem
        }

        h3 {
            color: ${props => props.theme.colors.terciary};
            font-size: 1.7rem;
            margin: 0.5rem 0 1.9rem 0;
        }

        p{
            font-size: 1.2rem;
            line-height: 1.8rem;
            margin-bottom: 2rem;
            text-indent: 1.5em;
            text-align: justify;
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