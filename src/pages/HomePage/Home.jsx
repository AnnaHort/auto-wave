import React from 'react';
import { HomeContainer, TextStyle } from './Home.Styled';
import CarRentalBrands from '../../components/CarRentalBrands/CarRentalBrands';
import AboutUsComponent from '../../components/AboutUsComponent/AboutUsComponent';
import HomeHeroComponent from '../../components/HomeHeroComponent/HomeHeroComponent';

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomeHeroComponent />
        <TextStyle>
        AutoWave gives you access to the largest car rental brands.
        </TextStyle>
        <CarRentalBrands />
        <AboutUsComponent />
      </HomeContainer>
    </>
  );
};

export default Home;
