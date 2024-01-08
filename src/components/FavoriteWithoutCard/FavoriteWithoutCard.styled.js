import { FcLike } from "react-icons/fc";
import styled from "styled-components";

export const WithoutFavoriteContainer = styled.div`
max-width: 500px;
margin-right: auto;
margin-left: auto;
display: flex;
flex-direction: column;
gap: 20px;
justify-content: center;
align-items: center;
`

export const WithoutFavoriteHeartSvg = styled(FcLike)`
width: 200px;
height: 200px;
path {
    fill: #3470ff; /* Червоний колір */
  }
`

export const WithoutFavoriteText = styled.p`
color: #121417;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 1.5;
`