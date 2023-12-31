import styled from 'styled-components';

export const ListCardStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  justify-content: center;
  align-items: flex-end;
`;

export const CardContainerStyled = styled.div`
  max-width: 274px;
  position: relative;
  margin-bottom: 100px;
  display: flex;
  height: 450px;
  flex-direction: column;
  justify-content: space-between;
`;
export const CardImgStyled = styled.img`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  margin-bottom: 14px;
  object-fit: cover;
`;

export const AboutCarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export const CarMarkStyled = styled.p`
  color: #121417;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  
`;
export const CarModelStyled = styled.span`
  color: #3470ff;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  
  
`;
export const InfoListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  color: rgba(18, 20, 23, 0.5);
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 28px;
  height: 40px;
  max-width: 277px;
  
`;

export const InfoListElStyled = styled.li`
  display: flex;
  gap: 6px;
`;

export const CarCardButton = styled.button`
  width: 100%;
  height: 44px;
  padding: 12px 0px;
  background-color: #3470ff;
  border-radius: 12px;
  color: #fff;
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  border: none;
  
  &:hover {
    background: #0b44cd;
    transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
