import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        transition: 500ms ease-out;
    }

    body{
        background-color: ${props => props.theme.colors.background};
    }
`;
