import React from 'react';
import { ListElementStyled, ListStyle, StyledSwiper } from './CarRentalBrands.styled';
import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CarRentalBrands = () => {
  const imagePaths = [
    require('../../images/carRentalBrands/alamo_logo_lrg.jpg'),
    require('../../images/carRentalBrands/budget_logo_lrg.jpg'),
    require('../../images/carRentalBrands/enterprise_logo_lrg.jpg'),
    require('../../images/carRentalBrands/europcar_logo_lrg.jpg'),
    require('../../images/carRentalBrands/firent_logo_lrg.jpg'),
    require('../../images/carRentalBrands/hertz_logo_lrg.jpg'),
    require('../../images/carRentalBrands/sixt_logo_lrg.jpg'),
    require('../../images/carRentalBrands/thrifty_logo_lrg.jpg'),
  ];

  const breakpoints = {
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 6,
    },
  };

  return (
    <ListStyle>
      <StyledSwiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={2}
        breakpoints={breakpoints}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {imagePaths.map((path, index) => (
          <SwiperSlide key={index}>
            <ListElementStyled>
              <img
                src={path}
                alt={`Car Rental Brand ${index}`}
              />
            </ListElementStyled>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </ListStyle>
  );
};

export default CarRentalBrands;
