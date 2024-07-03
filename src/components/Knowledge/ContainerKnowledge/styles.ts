import styled from "styled-components";

type ContainerProps = {
    haveTextToShow: number;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem;
    padding: 1rem;
    border: 2px solid ${props => props.theme.colors.secondary};
    box-shadow: 2px 4px 10px ${props => props.theme.colors.secondary};
    border-radius: 1rem;
    width: 20%;
    transition: 0.5s;
    cursor: ${props => props.haveTextToShow > 0 ? "pointer" : "none"};

    &:hover{
        transform: scale(0.95);
        transition: 0.5s;
    }

    h1{
        font-size: 1.5rem;
        color: ${props => props.theme.colors.secondary}
    }

    @media screen and (max-width: 600px){
        width: 30%;
        
        .knowledge__title{
            font-size: 0.7rem;
        }
    }

    @media screen and (max-width: 950px){

        
        .knowledge__title{
            font-size: 0.9rem;
        }
    }
    



`