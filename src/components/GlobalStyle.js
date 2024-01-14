import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

:root {
    --color-primary-black: #121417;  
    --color-primary-white: #ffffff;  
    --color-primary-white-2: #FFFAEE;
    --color-primary-blue: #3470FF;
    --color-primary-blue-2: #0B44CD;
}

body {
    overflow-y: scroll; 
    margin: 0;  
    width: 100%;
    box-sizing: border-box;
    user-select: none;
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
    padding-left: 10px;
    padding-right: 10px;
    @media (min-width: 768px) {
        padding-left: 30px;
    padding-right: 30px;
    }
    @media (min-width: 1024px) {
        padding-left: 60px;
    padding-right: 60px;
    }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
`;
