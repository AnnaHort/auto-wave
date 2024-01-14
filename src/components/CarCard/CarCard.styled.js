import styled, { keyframes } from 'styled-components';

export const ListCardStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  justify-content: center;
  align-items: flex-end;
`;

const cardAnimation = keyframes`
from{
  opacity: 0;
}
to{
  opacity: 1;
}
`;

export const CardContainerStyled = styled.div`
  max-width: 274px;
  position: relative;
  margin-bottom: 100px;
  display: flex;
  height: 450px;
  flex-direction: column;
  justify-content: space-between;
  animation: ${cardAnimation} 0.5s cubic-bezier(0.39, 0.4, 0.77, 0.74);
`;

export const CardImgContainer = styled.div`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  margin-bottom: 14px;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 85%,
      rgba(18, 20, 23, 0.4990371148459384) 100%
    );
  }
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
  color: var(--color-primary-black);
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;
export const CarModelStyled = styled.span`
  color: var(--color-primary-blue);
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
  background-color: var(--color-primary-blue);
  border-radius: 12px;
  color: var(--color-primary-white);
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  border: none;

  &:hover {
    background: var(--color-primary-blue-2);
    transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
