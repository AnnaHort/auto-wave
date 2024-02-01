import React from 'react';
import {
  CleanCarsContainer,
  CleanCarsImg,
  CleanCarsText,
  CleanCarsTitle,
} from './CleanCars.styled';
import carWashImage from '../../images/homeCarWash/carWaching.webp';

const CleanCars = () => {
  return (
    <CleanCarsContainer>
      <CleanCarsImg src={carWashImage} alt="Clean your car" />
      <CleanCarsTitle>
        Clean cars. Flexible bookings. Socially distant rental counters.
      </CleanCarsTitle>
      <CleanCarsText>
        We’re working with our partners to keep you safe and in the driving
        seat.
      </CleanCarsText>
    </CleanCarsContainer>
  );
};

export default CleanCars;
