import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
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
