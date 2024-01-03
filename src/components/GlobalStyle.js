import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
body {
    overflow-y: scroll; 
    margin: 0;  
    width: 100%;
    box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin-top: 0;
    margin-bottom: 0;
    user-select:none;
    font-family: 'Manrope', sans-serif;
}

ul,
ol {
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
}

img {
    display: block;
}

button {
    cursor: pointer;
}

.loader{
    fill:black
}

#root{
    padding-left: 60px;
    padding-right: 60px;
}
`;
