import styled from "styled-components";

export const MainModalContainerStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 20, 23, 0.5);
  z-index: 1;
`;

export const ModalContainerStyled = styled.div`
  max-width: 541px;
  border-radius: 24px;
  background-color: #fff;
  padding: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  position: absolute;
  z-index: 2;
`;

export const ModalImgStyled = styled.img`
  max-width: 469px;
  max-height: 287px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 24px;
  margin-bottom: 14px;
`;

export const ModalTitleStyled = styled.h2`
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 8px;
`;
export const ModalTitleSpanStyled = styled.span`
  color: #3470ff;
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;
export const ModalListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 14px;
`;

export const ModalAboutTextStyled = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  margin-bottom: 24px;
`;
export const ModalAccessoriesStyled = styled.h3`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  margin-bottom: 15px;
`;

export const ModalCarConditionsStyled = styled.ul`
  display: flex;
  gap: 36px;
  color: #363535;
  font-family: Manrope;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 31px;
`;

export const ModalConditionsSpanStyled = styled.span`
  color: #3470ff;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;
export const ModalButtonStyled = styled.button`
  border-radius: 12px;
  background: #3470ff;
  padding: 12px 50px;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  border: none;
  &:hover{
  background: #0B44CD;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1)
}
`;
