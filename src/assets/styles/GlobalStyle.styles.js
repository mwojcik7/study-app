import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    overflow: hidden;
    height: 100vh;
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }

  *::-webkit-scrollbar {
    width: 15px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    border-radius: 15px;
  }
  
  *::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    border-radius: 15px;
  }
  
  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.darkPurple};
    border: 3px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
  }
`;
