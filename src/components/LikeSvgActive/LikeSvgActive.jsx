import React from 'react';
import { LikeSvgActiveStyled } from './LikeSvgActive.styled';

const LikeSvgActive = ({ onClick }) => {
  return (
    <LikeSvgActiveStyled
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 32 32"
      onClick={onClick}
    >
      <title>active</title>
      <path
        fill="var(--color-primary-blue)"
        d="M8.027 3.253c-3.564 0.642-6.203 3.353-6.745 6.933-0.037 0.344-0.059 0.743-0.059 1.147s0.021 0.803 0.063 1.196l-0.004-0.049c0.219 1.502 0.817 2.835 1.693 3.937l-0.013-0.017c0.185 0.235 3.104 3.191 6.487 6.571 6.692 6.683 6.242 6.27 6.75 6.178 0.18-0.032 0.871-0.706 6.352-6.178 3.383-3.38 6.302-6.336 6.487-6.571 0.863-1.085 1.461-2.418 1.675-3.876l0.005-0.044c0.037-0.344 0.059-0.743 0.059-1.147s-0.021-0.803-0.063-1.196l0.004 0.049c-0.219-1.502-0.816-2.834-1.691-3.937l0.013 0.017c-2.171-2.775-5.879-3.835-9.239-2.64-1.145 0.409-2.068 1.013-3.184 2.085l-0.617 0.594-0.617-0.594c-1.328-1.276-2.45-1.934-3.97-2.327-0.611-0.149-1.313-0.234-2.034-0.234-0.477 0-0.946 0.037-1.403 0.109l0.051-0.007z"
      ></path>
    </LikeSvgActiveStyled>
  );
};

export default LikeSvgActive;
