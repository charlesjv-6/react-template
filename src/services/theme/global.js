import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        --backgroud: ${({ theme }) => theme.background};
        --primary: ${({ theme }) => theme.primary};
        --secondary: ${({ theme }) => theme.secondary};
        --accent: ${({ theme }) => theme.accent};
        --text: ${({ theme }) => theme.text};
    }
    .screen-overlay {
        background-color: ${({ theme }) => theme.background};
    }
    svg {
        fill: ${({ theme }) => theme.text};
    }
    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.backgroundSecondary};
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.backgroundPrimary};
        border-radius: 10px;
    }
`;
