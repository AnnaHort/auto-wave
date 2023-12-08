import styled from "styled-components";

export const CardContainerStyled = styled.div`
  max-width: 274px;
  position: relative;
`;
export const CardImgStyled = styled.img`
  width: 100%;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const AboutCarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export const CarMarkStyled = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;
export const CarModelStyled = styled.span`
color: #3470FF;
font-family: Manrope;
font-size: 16px;
font-weight: 500;
line-height: 1.5;
`
export const InfoListStyled = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 12px;
color: rgba(18, 20, 23, 0.50);
font-family: Manrope;
font-size: 12px;
font-weight: 400;
line-height: 1.5; 
margin-bottom: 28px;
`
export const CarCardButton = styled.button`
width: 100%;
padding: 12px 99px;
background-color: #3470FF;
border-radius: 12px;
color: #fff;
font-family: Manrope;
font-size: 14px;
font-weight: 600;
line-height: 1.4; 
border: none;
`