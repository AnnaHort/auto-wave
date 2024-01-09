import { FcSearch } from 'react-icons/fc';
import styled, { keyframes } from 'styled-components';

export const LoadMoreStyled = styled.button`
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 150px;
  border: none;
  background-color: transparent;
  color: #3470ff;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  &:hover {
    color: #0b44cd;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const NoCardsContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;
