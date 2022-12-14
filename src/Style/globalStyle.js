import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
}

body {
    box-sizing: border-box;
    background-color: #404258;
}
`;

export default GlobalStyle;
