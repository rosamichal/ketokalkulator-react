import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        background: ${({ theme }) => theme.body.background};
        color: ${({ theme }) => theme.body.color};
        font-family: 'Lato', sans-serif;;
        display: flex;
        justify-content: center;
        min-height: 100vh;
    }
`;