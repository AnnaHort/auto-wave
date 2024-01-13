import styled, { keyframes } from 'styled-components';

const animateActiveLike = keyframes`
from{
    opacity: 0;
}
to{
    opacity: 
    1;
}
`;

export const LikeSvgActiveStyled = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
  animation: ${animateActiveLike} 0.3s cubic-bezier(.4,.41,.74,.72);
`;
