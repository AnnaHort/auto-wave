import { FaSearch } from 'react-icons/fa';
import { RxCalendar } from 'react-icons/rx';
import { TbPigMoney } from 'react-icons/tb';
import styled from 'styled-components';

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    gap: 60px;
  }
`;

export const ListElementStyled = styled.li`
position: relative;
width: 260px;
height: 240px;
@media (min-width: 768px) {
  width: 200px;
}
@media (min-width: 1024px) {
  width: 260px;
}
`

// export const ListItemStyled = styled.li`
//   -webkit-tap-highlight-color: 'rgba(0,0,0,0)';
//   margin-right: auto;
//   margin-left: auto;
//   height: 240px;
//   width: 260px;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   gap: 20px;
//   text-align: center;
//   padding: 36px 44px;
//   border: 1px solid rgba(0, 0, 0, 0.2);
//   border-radius: 10px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
//   @media (min-width: 768px) {

//     margin-right: 0;
//     margin-left: 0;
//   }
// `;

export const TitleTextStyled = styled.h3`
  color: var(--color-primary-black);
`;

export const TextStyled = styled.p`
  color: var(--color-primary-black);
  font-size: 20px;
  line-height: 1.25;
`;

export const AboutUsCalendarSvg = styled(RxCalendar)`
  color: var(--color-primary-blue);
  height: 50%;
  width: 50%;
`;
export const AboutUsSearchSvg = styled(FaSearch)`
  color: var(--color-primary-blue);
  height: 50%;
  width: 50%;
`;
export const AboutUsMoneySvg = styled(TbPigMoney)`
  color: var(--color-primary-blue);
  height: 50%;
  width: 50%;
  & > path {
    width: 50%;
    height: 50%;
  }
`;
