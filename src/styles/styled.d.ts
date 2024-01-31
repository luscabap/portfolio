import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string,
            secondary: string,
            terciary: string,

            contrast: string,
            background: string,
            hover: string,
            inverse: string
        }
    }
}