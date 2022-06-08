import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0;
  padding: 0;
}
*, *::after, *::before {
  box-sizing: border-box;
  text-align: center;
}
body {
  align-items: center;
  background:  ${({ theme }) => theme.primaryDark};
  color: ${({ theme }) => theme.primaryLight};
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  height: 100vh;
  justify-content: center;
  text-rendering: optimizeLegibility;
 
`;

export default GlobalStyle