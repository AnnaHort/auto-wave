import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 28px;
  @media (min-width: 768px) {
    padding: 20px 40px;
    margin-bottom: 40px;
  }
  @media (min-width: 1024px) {
    padding: 30px 60px;
    margin-bottom: 60px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  @media (min-width: 1024px) {
  }
`;

export const HeaderListStyled = styled.ul`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    gap: 80px;
  }

  /* @media (min-width: 1024px) {
    display: flex;
    gap: 80px;
  } */
`;

const underlineAnimation = keyframes`
  from {
    width: 0;
    left: 50%;
  }
  to {
    width: 100%;
    left: 0;
  }
`;

export const LinkStyle = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-family: 'Manrope';

  &:hover,
  &:focus {
    color: #3470ff;
    transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.active {
    color: #0b44cd;
    transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 1.5px;
      background-color: rgba(18, 20, 23, 0.3);
      animation: ${underlineAnimation} 0.3s cubic-bezier(0.39, 0.4, 0.77, 0.74);
    }
  }
`;
