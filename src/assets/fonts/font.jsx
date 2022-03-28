import { createGlobalStyle } from "styled-components";
import roboto from "./Roboto-Regular.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), url(${roboto}) format('truetype');
    }   
`;

export default GlobalStyle;
