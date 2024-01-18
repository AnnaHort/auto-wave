import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const MainModalContainerStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 20, 23, 0.5);
  z-index: 1;
`;

const modalIn = keyframes`
  from {
    left: 40%;
    opacity: 0;
  }
  to {
    top: 50%;
    opacity: 1;
  }
`;

export const ModalContainerStyled = styled.div`
  max-height: 80vh;
  min-width: 280px;
  border-radius: 24px;
  background-color: var(--color-primary-white);
  padding: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 2;
  animation: ${modalIn} 0.3s cubic-bezier(0.39, 0.4, 0.77, 0.74);
  @media (min-width: 768px) {
    max-height: 100vh;
  }
`;

export const ModalImgStyled = styled.img`
  width: 200px;
  max-height: 200px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 24px;
  margin-bottom: 14px;
  object-fit: cover;
  @media (min-width: 768px) {
    width: 469px;
    max-height: 287px;
  }
`;

export const ModalTitleStyled = styled.h2`
  color: var(--color-primary-black);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 8px;
`;

export const ModalTitleSpanStyled = styled.span`
  color: var(--color-primary-blue);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;

export const MobileModalContainer = styled.div`
  width: 100%;
  max-height: 300px;
  overflow-y: scroll;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 541px;
    overflow-y: hidden;
    max-height: auto;
    /* width: 100%; */
    margin-bottom: 0px;
  }
`;

export const ModalListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 14px;
`;

export const ModalAboutTextStyled = styled.p`
  color: var(--color-primary-black);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  margin-bottom: 24px;
`;
export const ModalAccessoriesStyled = styled.h3`
  color: var(--color-primary-black);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`;

export const ModalCarConditionsStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  color: #363535;
  font-family: 'Manrope';
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 31px;
  li {
    padding: 12px 36px 12px 0;
  }
`;

export const ModalConditionsSpanStyled = styled.span`
  color: var(--color-primary-blue);
  font-family: 'Manrope';
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;
export const ModalLinkStyled = styled(NavLink)`
  border-radius: 12px;
  background: var(--color-primary-blue);
  padding: 12px 50px;
  color: var(--color-primary-white);
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  border: none;
  text-decoration: none;
  font-family: 'Manrope';
  display: block;
  text-align: center;
  @media (min-width: 768px) {
    display: inline;
  text-align: start;
  }
  &:hover {
    background: var(--color-primary-blue-2);
    transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
