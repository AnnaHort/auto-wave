import styled from 'styled-components';
import { Swiper as SwiperComponent } from 'swiper/react';

export const ListStyle = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 60px;
  }
`;
export const ListElementStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSwiper = styled(SwiperComponent)`
  .swiper-wrapper {
    height: 100px;
    display: flex;
    align-items: center;
    padding: 10px 0 10px 0;
  }

  .swiper-pagination {
    position: absolute;
  }

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: var(--color-primary-blue);
    margin: 0 5px;
    cursor: pointer;

    &.swiper-pagination-bullet-active {
      background-color: var(--color-primary-blue-2);
    }
    /* @media (min-width: 768px) {
      .swiper-slide {
        width: calc(100% / 2.5); 
      }
    }

    @media (min-width: 1024px) {
      .swiper-slide {
        width: calc(100% / 10); 
      }
    } */
  }
`;
