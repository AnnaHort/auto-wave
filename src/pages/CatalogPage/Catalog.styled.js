import { FcSearch } from 'react-icons/fc';
import styled, { keyframes } from 'styled-components';

export const LoadMoreStyled = styled.button`
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 150px;
  border: none;
  background-color: transparent;
  color: var(--color-primary-blue);
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  &:hover {
    color: var(--color-primary-blue-2);
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const noCardsContainerAnimation = keyframes`
from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

export const NoCardsContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  animation: ${noCardsContainerAnimation} 1200ms;
  animation-fill-mode: forwards;
`;

const search = keyframes`
0% {
  transform: translate3d(0px, 0px, 0px);
}
25% {
  transform: translate3d(25px, 25px, 0px);
}
50% {
  transform: translate3d(0px, 50px, 0px);
}
75%{
  transform: translate3d(-25px, 25px, 0px);
}
100% {
  transform: translate3d(0px, 0px, 0px);
}
`;
export const SearchNoCarsSvg = styled(FcSearch)`
  min-width: 200px;
  min-height: 200px;
  animation: ${search} 5s linear infinite;
`;

export const NoCarsText = styled.h2`
  text-align: center;
  color: var(--color-primary-black);
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;
