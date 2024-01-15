import { FaSearch } from 'react-icons/fa';
import { RxCalendar } from 'react-icons/rx';
import { TbPigMoney } from 'react-icons/tb';
import styled from 'styled-components';

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
`;

export const ListItemStyled = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  text-align: center;
  padding: 36px 44px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  &:hover{
    transform: rotateY(180deg);
  }
`;

export const AboutUsListContainer = styled.div`
  /* position: absolute; */
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`

export const TitleTextStyled = styled.h3`
  color: var(--color-primary-black);
  text-transform: uppercase;
`;

export const TextStyled = styled.p`

  padding: 28px;
  border-radius: 15px;
  background-color: white;
  color: var(--black);
  transform: rotateY(180deg);
  overflow: hidden;
`;

export const AboutUsCalendarSvg = styled(RxCalendar)`
  color: var(--color-primary-blue);
  height: 60px;
  width: 60px;
`;
export const AboutUsSearchSvg = styled(FaSearch)`
  color: var(--color-primary-blue);
  height: 60px;
  width: 60px;
`;
export const AboutUsMoneySvg = styled(TbPigMoney)`
  color: var(--color-primary-blue);
  height: 60px;
  width: 60px;
  & > path {
    width: 60px;
    height: 60px;
  }
`;
