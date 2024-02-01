import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const OurPropositionContainer = styled.div`
  margin-bottom: 40px;
  @media (min-width: 768px) {
    width: 50%;
  }
`;
export const OurPropositionTitle = styled.h3`
  text-align: center;
  margin-bottom: 16px;
`;

export const TopPropositionsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    gap: 12px;
  }
`;

export const TopPropositionsListEl = styled.li`
`;
export const TopPropositionsImgContainer = styled.div``;
export const TopPropositionsContainerCarInfo = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-top: 0px;
  border-radius: 0 0 10px 10px;
  padding: 12px;
`;

export const TopPropositionsImg = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

export const TopPropositionsTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const TopPropositionsLink = styled(Link)`
  display: block;
  width: 100%;
  padding: 14px 24px;
  border-radius: 12px;
  background: var(--color-primary-blue);
  border: none;
  color: var(--color-primary-white);
  font-family: 'Manrope', sans-serif;
  text-decoration: none;
  text-align: center;
  &:hover {
    background-color: var(--color-primary-blue-2);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
