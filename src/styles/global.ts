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

    body::-webkit-scrollbar{
        width: 8px;
    }

    body::-webkit-scrollbar-track{
        background-color: ${p => p.theme.colors.secondary};
    }

    body::-webkit-scrollbar-thumb{
        background-color: ${p => p.theme.colors.contrast};
        border-radius: 40px;
        cursor: crosshair;
    }
`;
