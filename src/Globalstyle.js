import { createGlobalStyle } from "styled-components";

const GlobalStyle =createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    
    box-sizzing: border-box;
    font-family: 'Castoro', serif;

}

html {
    font-size: 62.5%;
    overflow-x:hidden;
}
h1 {
color: ${({theme}) => theme.colors.heading};    
font-size: 10px;
font-weight: 900;

}

`;
export default GlobalStyle;