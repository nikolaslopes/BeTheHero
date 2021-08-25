import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.gray[900]}
  }

  button {
    cursor: pointer;
  }
`;
