import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 30px 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 60px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const HeaderListStyled = styled.ul`
  display: flex;
  gap: 80px;
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-family: 'Manrope';
  &:hover,
  :focus {
    color: teal;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
